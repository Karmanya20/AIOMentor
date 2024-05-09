import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      unique: true,
      required: true,
    },
    goal: {
      type: String,
      default: "",
    },
    accountType: {
      type: String,
      required: true,
      enum: ["mentor", "mentee"],
    },
    refreshToken : {
      type: String,
    }
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
