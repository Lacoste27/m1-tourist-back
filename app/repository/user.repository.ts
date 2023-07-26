import { IUser } from "../models/types/IUser";
import { User } from "../models/schemas/user";
import mongoose from "mongoose";

const signup = (user: any) => {
  const add = new User(user);
  return add.save();
};

const all = async () => {
  const response = await mongoose.model("User").find({});
  return response;
};

const findbyemail = (email: string) => {
  const response = mongoose.model("User").findOne({ email: email });
  return response;
};

export { signup, all, findbyemail };
