import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../models/userModel.ts";

dotenv.config({ path: ".env" });

const JWT_SECRET = process.env.JWT_SECRET;

export const signup = async (req: Request, res: Response) => {
  try {
    const { email, password, name, profileImage } = req.body;
    // checking if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        status: "fail",
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      email,
      password: hashedPassword,
      name,
      profileImage,
      role: 'BASIC',
      cvCount: 0  
    });
  } catch (err) {}
};
