import mongoose, {Document, Schema } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password?: string;
    googleId?: string;
    name: string;
    profileImage?: string;
    role: 'BASIC'|'PREMIUM';
    cvCount: number;
    resetToken?: string;
    createdAt: Date;
    updatedAt: Date;
}