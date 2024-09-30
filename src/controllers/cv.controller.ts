import { Request, Response } from "express";
import CV from "../models/cvModel";
import * as cvService from "../services/cv.service";

// Extend the Request interface to include user property
interface CustomRequest extends Request {
  user?: {
    id: string;
  };
}

export const createCV = async (req: CustomRequest, res: Response) => {
  try {
    const userId = req.user?.id;
    const { role, company, year, isCurrentlyWorking, experience } = req.body;
    const newCv = await cvService.createCV({ ...req.body, userId });
    res.status(201).json({
      status: "success",
      message: "CV created successfully",
      data: {
        cv: newCv,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: (err as Error).message,
    });
  }
};

export const getCVById = async (req: Request, res: Response) => {
  try {
    const cvId = req.params.id;
    const cv = await cvService.getCVById(cvId);
    
    res.status(200).json(cv);
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: (err as Error).message,
    });
  }
}
