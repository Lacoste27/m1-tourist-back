import { IResponse } from "../models/types/IResponse";
import HttpStatusCodes from "../others/httpastatuscode";
import { Site } from "../models/schemas/site";
import { allsite } from "../repository/site.repository";
import { ISite } from "../models/types/ISite";

const listsite = async () => {
    try{
        const sites = await allsite();

        const result: IResponse={
            data: sites,
            message: "La liste de tous les sites",
            isSuccess: true,
            isError: false,
            statusCode: HttpStatusCodes.OK
        }

        return result;
    }catch(error){
        throw error;
    }
}

export {listsite}