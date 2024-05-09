import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signUpUser = async (req, res, next) => {
  const { username, email, password, accountType, phone, goal } = req.body;
  if (!username || !email || !password || !accountType || !phone) {
    next(errorHandler(400, "All fields are required"));
  }
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword,
    phone,
    goal,
    accountType,
  });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

export const signInUser = async (req, res, next) => {
  const data = req.body;
  const { email, password } = data;
  if (!email || !password) {
    next(errorHandler(400, "All fields are required"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid Credentials"));

    const accessToken = jwt.sign({ data : data}, process.env.JWT_SECRET);
    const refreshToken = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: hashedPassword, ...rest } = validUser._doc;

    //Save the refresh token in the database
    validUser.refreshToken = refreshToken;
    await validUser.save({validateBeforeSave: true});

    const expiryDate = new Date(Date.now() + 3600000); // 1 Hour

    res
      .cookie("access_token", accessToken, { httpOnly: true, expires: expiryDate })
      .cookie("refresh_token", refreshToken, { httpOnly: true, expires: expiryDate })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
