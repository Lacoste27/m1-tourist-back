import { IUser } from "../models/types/IUser";
import { User } from "../models/schemas/user";
import mongoose from "mongoose";
import Connection from "../models/connection";

const signup = async (user: any) => {
  let connection = new Connection();
  connection.OpenConnection();

  try {
    const add = new User(user);
    return add.save();
  } catch (error) {
    throw error;
  } finally {
    connection.CloseConnection();
  }
};

const all = async () => {
  let connection = new Connection();
  connection.OpenConnection();

  try {
    const response = await User.find({});
    return response;
  } catch (error) {
    throw error;
  } finally {
    connection.CloseConnection();
  }
};

const findbyemail = async (email: string) => {
  let connection = new Connection();
  connection.OpenConnection();

  try {
    const response = User.findOne({ email: email });
    return response;
  } catch (error) {
    throw error;
  } finally {
    connection.CloseConnection();
  }
};

export { signup, all, findbyemail };
