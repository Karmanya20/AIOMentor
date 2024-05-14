import jwt from "jsonwebtoken";
import { config as dotenvConfig } from "dotenv";
import User from "../models/user.model.js"; 

dotenvConfig();

// Auth Middleware
export const auth = async (req, res, next) => {
    try {
        // Extract token
        const token = req.cookies.token || req.body.token || req.headers.authorization.replace("Bearer ", "");

        // If token is missing, return response
        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Token is missing',
            });
        }

        // Verify the token
        try {
            const decode = jwt.verify(token, process.env.JWT_SECRET);
            console.log(decode);
            req.user = decode;
        } catch (err) {
            // Verification issue
            return res.status(401).json({
                success: false,
                message: 'Token is invalid',
            });
        }
        next();
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: 'Something went wrong while validating the token',
        });
    }
};

// Middleware to check if user is a Mentee
export const isMentee = async (req, res, next) => {
    try {
        if (req.user.accountType!== "mentee") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for mentee only',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        });
    }
};

// Middleware to check if user is a Mentor
export const isMentor = async (req, res, next) => {
    try {
        if (req.user.accountType !== "Mentor") {
            return res.status(401).json({
                success: false,
                message: 'This is a protected route for Mentor only',
            });
        }
        next();
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'User role cannot be verified, please try again'
        });
    }
};


/*

//isAdmin
exports.isAdmin = async (req, res, next) => {
    try{
           if(req.user.accountType !== "Admin") {
               return res.status(401).json({
                   success:false,
                   message:'This is a protected route for Admin only',
               });
           }
           next();
    }
    catch(error) {
       return res.status(500).json({
           success:false,
           message:'User role cannot be verified, please try again'
       })
    }
   }*/