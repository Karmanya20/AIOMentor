import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

const generateAccessToken = (data) => {
  return jwt.sign({ data : data}, process.env.JWT_SECRET)
}

const generateRefreshToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET)
}

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
  const accessToken = generateAccessToken(newUser);
  const refreshToken = generateRefreshToken(newUser._id.toString());

  try {
    await newUser.save();
    res
    .status(200)
    .json({
      success: true,
      accessToken: accessToken,
      refreshToken: refreshToken,
      message: "User created successfully"
    });
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
    
    const accessToken = generateAccessToken(data);
    const refreshToken = generateRefreshToken(validUser._id.toString());

    const { password: hashedPassword, ...rest } = validUser._doc;

    //Save the refresh token in the database
    validUser.refreshToken = refreshToken;
    await validUser.save({validateBeforeSave: true});

    res
      .status(200)
      .json({
        success: true,
        accessToken: accessToken,
        refreshToken: refreshToken,
        message: "User loggedIn successfully"
      });
  } catch (error) {
    next(error);
  }
};
