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
    gender:{
      type: String,
      default: "",
    },
    dateOfBirth:{
      type: String,
      default: "",
    },
    location:{
      type: String,
      default: "West Bengal"
    },
    industry:{
      type: String,
      default: "",
    },
    area_of_expertise:{
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
    },
    image: {
      type: String,
    },
     token: {
			type: String,
		}
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
