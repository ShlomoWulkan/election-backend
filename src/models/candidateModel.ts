import e from "express";
import { model, Schema } from "mongoose";

export interface ICandidate extends Document {
    name: string;
    image: string;
    votes: number;
}

const candidateSchema = new Schema<ICandidate>({
    name: {
        type: String,
        unique: true,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        default: null
    }
});

export default model<ICandidate>("Candidate", candidateSchema);