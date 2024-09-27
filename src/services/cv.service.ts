import CV from "../models/cvModel";
import User from "../models/userModel";

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

  // Increment CV count for the user
  const user = await User.findById(userId);
  if (!user) throw new Error("User not found");

  user.cvCount += 1;
  await user.save();

  return newCV;
};
