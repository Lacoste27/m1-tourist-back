import mongoose from "mongoose";
import Connection from "../models/connection";
import { Site } from "../models/schemas/site";
import { ISite } from "../models/types/ISite";

const allsite = async () =>{
    let connection = new Connection()
    connection.OpenConnection();

    try{
        const response = await mongoose.model("Site").find({});
        return response;
    }catch (error) {
        throw error;
      } finally {
        connection.CloseConnection();
      }
};

const findOneSite = async (idsite: string)  => {
    let connection = new Connection()
    connection.OpenConnection();

    try{
        const response = await mongoose.model("Site").findById(idsite);
        return response;
    }catch (error) {
        throw error;
    } finally {
    connection.CloseConnection();
    }
}

const searchSite = async (word: string)  => {
    let connection = new Connection()
    connection.OpenConnection();

    try{
        const response = await mongoose.model("Site").find({$or: [{ nom: {$regex: word} }, { description: {$regex: word} }, { region: {$regex: word} }]});
        return response;
    }catch (error) {
        throw error;
    } finally {
    connection.CloseConnection();
    }
}

export {allsite, findOneSite, searchSite};