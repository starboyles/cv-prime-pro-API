import { Request, Response } from "express";
import CV from "../models/cvModel";
import * as cvService from "../services/cv.service";

exports.createCV = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;
    const { role, company, year, isCurrentlyWorking, experience } = req.body;
    const newcv = await cvService.createCV(req.body);
    res.status(201).json({
      status: "success",
      message: "CV created successfully",
      data: {
        CV,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "fail",
      message: (err as Error).message,
    });
  }
};
