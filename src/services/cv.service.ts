import fs from 'fs'
import CV from "../models/cvModel";
import User from "../models/userModel";
import { buffer } from "stream/consumers";
import { createPDF } from "../utils/pdfUtils"; // Adjust the import path as necessary

export const createCV = async (data: {
  userId: string;
  role: string;
  company: string;
  year: string;
  experience: string[];
}) => {
  const { userId, role, company, year, experience } = data;

  const newCV = new CV({
    userId,
    role,
    company,
    year,
    isCurrentlyWorking: false,
    experience,
  });

  await newCV.save();
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  user.cvCount += 1;
  await user.save();

  return newCV;
};

export const getCVById = async (cvId: string) => {
  const cv = await CV.findById(cvId);
  if (!cv) throw new Error("CV not found");
  return cv;
};

export const downloadCV = async (cvId: string) => {
  const cv = await CV.findById(cvId);
  if (!cv) throw new Error("CV not found");
  const pdfFilePath = await createPDF(cv);
  const pdfBuffer = fs.readFileSync(pdfFilePath);
  return pdfBuffer;
};

