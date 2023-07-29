import { Site } from "../models/schemas/site";
import mongoose from "mongoose";

const allsite = async () => {
    const response = await mongoose.model('Site').find({});
    return response;
}

export {allsite}