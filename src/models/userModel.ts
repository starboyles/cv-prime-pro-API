import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  email: string;
  password?: string;
  googleId?: string;
  name: string;
  profileImage?: string;
  role: "BASIC" | "PREMIUM";
  cvCount: number;
  resetToken?: string;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.googleId;
      },
    },
    googleId: {
      type: String,
      required: function () {
        return !this.googleId;
      },
    },
    name: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
    },
    role: {
      type: String,
      enum: ["BASIC", "PREMIUM"],
      default: "BASIC",
    },
    cvCount: {
      type: Number,
      default: 0,
    },
    resetToken: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    updatedAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre<IUser>('save', function(next) {
    this.updatedAt = new Date();
    next();
  });

const User = mongoose.model<IUser>("User", userSchema);
export default User;