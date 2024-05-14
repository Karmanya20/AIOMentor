import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import profileRoutes from "./routes/profile.routes.js";

import { cloudinaryConnect } from "./config/cloudinary.js";
import fileUpload from "express-fileupload";

// Other code...


dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());

//cors

app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
}));


// fileUploader
app.use(
  fileUpload({
      useTempFiles:true,
      tempFileDir:"/tmp",
  })
)

//cloudinary connect
cloudinaryConnect();

//route mount

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile", profileRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Alpha is online on PORT:${process.env.PORT}!`);
});

app.get('/', (req, res) => {
  res.send(
      "<h1>Hello World!</h1>" 
      // or whatever your favorite hello world is!
  )
}); 

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
