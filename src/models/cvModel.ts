import mongoose, { Document, Schema } from 'mongoose';

export interface ICV extends Document{
    userId: mongoose.Types.ObjectId;
    role: string;
    company: string;
    year: string; //year can be stored in formats like yyyy-yyy
    isCurrentlyWorking: boolean
    experience: string[]; //array of short experiences
    createdAt: Date;
    updatedAt: Date;
}

    const cvSchema: Schema<ICV> = new mongoose.Schema({

});