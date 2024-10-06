import { Request, Response } from "express";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken';
import User from '../models/userModel.ts';

const JWT_SECRET = process.env.JWT_SECRET;


export const signup = (req: Request, res: Response) => {

}