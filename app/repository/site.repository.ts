import mongoose from "mongoose";
import Connection from "../models/connection";
import { Site } from "../models/schemas/site";

const allsite = async () => {
  let connection = new Connection();
  connection.OpenConnection();

  try {
    const response = Site.find({});
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    connection.CloseConnection();
  }
};

const findOneSite = async (idsite: string) => {
  let connection = new Connection();
  connection.OpenConnection();

  try {
    const response = await Site.findById(idsite);
    return response;
  } catch (error) {
    throw error;
  } finally {
    connection.CloseConnection();
  }
};

const searchSite = async (word: string) => {
  let connection = new Connection();
  connection.OpenConnection();

  try {
    const response = await Site
      .find({
        $or: [
          { nom: { $regex: new RegExp(word,'i') } },
          { description: { $regex:  new RegExp(word,'i') } },
          { region: { $regex:  new RegExp(word,'i') } },
        ],
      });
    return response;
  } catch (error) {
    throw error;
  } finally {
    connection.CloseConnection();
  }
};

export { allsite, findOneSite, searchSite };
