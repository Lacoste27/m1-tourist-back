import { Request, Response } from "express";
import HttpStatusCodes from "../others/httpastatuscode";
import { IResponse } from "../models/types/IResponse";
import { ISite } from "../models/types/ISite";
import { listsite } from "../services/sites.service";

const allsite = async (request: Request, response: Response) => {
    try{
        const result = await listsite();
        return result;
    }catch(error){
        const result: IResponse = {
            data: {},
            message: error,
            isError: true,
            isSuccess: false,
        };
      
        return response.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(result);
    }

}

export { allsite }