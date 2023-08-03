import { Request, Response } from "express";
import { getAllSites, getOneSite, doSearchingSite } from "../services/sites.service";
import { ISite } from "../models/types/ISite";
import { IResponse } from "../models/types/IResponse";
import HttpStatusCodes from "../others/httpastatuscode";

const allsite = async (request: Request, response: Response) => {
    try{
        getAllSites().then((result: IResponse)=>{
            return response.status(HttpStatusCodes.OK).json(result);
        })
    }catch(error){
        const result: IResponse = {
            data: {},
            message: error,
            isError: true,
            isSuccess: false
        };

        return response.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(result);
    }
};

const onesite = async(request: Request, response: Response) => {

    try{
        const idsite = request.params.id as string;

        getOneSite(idsite).then((result: IResponse)=>{
            return response.status(HttpStatusCodes.OK).json(result);
        })
    }catch(error){
        const result: IResponse = {
            data: {},
            message: error,
            isError: true,
            isSuccess: false
        };

        return response.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(result);
    }
}

const searchthesite = async (request: Request, response: Response) => {

    try{
        const word = request.query.word as string;

        doSearchingSite(word).then((result: IResponse)=>{
            return response.status(HttpStatusCodes.OK).json(result);
        });
    }catch(error){
        const result: IResponse = {
            data: {},
            message: error,
            isError: true,
            isSuccess: false
        };

        return response.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(result);
    }
}

export {allsite, onesite, searchthesite};