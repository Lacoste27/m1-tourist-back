import { Request, Response } from "express";
import { getAllSites, getOneSite, doSearchingSite, makeComment } from "../services/sites.service";
import { ISite } from "../models/types/ISite";
import { IResponse } from "../models/types/IResponse";
import HttpStatusCodes from "../others/httpastatuscode";
import { validationResult } from "express-validator";

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

const postComment = async (request: Request, response: Response) => {
    try{
        const errors = validationResult(request);

        if (!errors.isEmpty()) {
        const result: IResponse = {
            data: {},
            message: errors.array(),
            isSuccess: true,
            isError: false,
            statusCode: HttpStatusCodes.BAD_REQUEST,
        };
        return response.status(HttpStatusCodes.BAD_REQUEST).json(result);
        }
        
        const note = request.body["note"];
        const commentaire = request.body["commentaire"];
        const username = request.body["username"];
        const idsite = request.body["idsite"];

        makeComment(idsite, username, commentaire, note).then((result: IResponse)=>{
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

export {allsite, onesite, searchthesite, postComment};