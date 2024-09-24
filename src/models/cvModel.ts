import mongoose, { Document, Schema } from "mongoose";

export interface ICV extends Document {
  userId: mongoose.Types.ObjectId;
  role: string;
  company: string;
  year: string; //year can be stored in formats like yyyy-yyy
  isCurrentlyWorking: boolean;
  experience: string[]; //array of short experiences
  createdAt: Date;
  updatedAt: Date;
}

const cvSchema: Schema<ICV> = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    isCurrentlyWorking: {
      type: Boolean,
      required: true,
      default: false,
    },
    experience: {
      type: [String],
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

cvSchema.pre<ICV>('save', function(next) {
  this.updatedAt = new Date();
  next();
});

const CV = mongoose.model<ICV>("CV", cvSchema);
export default CV;