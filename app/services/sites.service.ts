import { allsite, findOneSite, searchSite } from "../repository/site.repository";
import { ISite } from "../models/types/ISite";
import { Site } from "../models/schemas/site";
import { IResponse } from "../models/types/IResponse";
import HttpStatusCodes from "../others/httpastatuscode";
import constants  from "../others/constants";

const getAllSites = async (): Promise<IResponse> =>{
    try{
        const allsites = await allsite();

        const result: IResponse = {
            data: allsites,
            message: "Liste des sites historiques",
            isError: false,
            isSuccess: true
        }

        return result;
    }catch(error){
        const result: IResponse = {
            data: {},
            message: error,
            isSuccess: false,
            isError: true,
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
          };
      
          return result;
    }
}

const getOneSite = async (idsite: string): Promise<IResponse> =>{
    try{
        const site = await findOneSite(idsite);

        if(site != null){
            const result: IResponse = {
                data: site,
                message: "Site trouvée",
                isError: false,
                isSuccess: true,
                statusCode: 202,
              };

              return result;
        }else if(site === null){
            const result: IResponse = {
                data: {},
                message: "Site non trouvée",
                isError: false,
                isSuccess: true,
                statusCode: 202,
              };
        
              return result;
        }
    }catch(error){
        const result: IResponse = {
            data: {},
            message: error,
            isSuccess: true,
            isError: false,
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
          };
      
          return result;
    }
}

const doSearchingSite = async (word: string) :Promise<IResponse> =>{
    try{
        const allsites = await searchSite(word);

        const result: IResponse = {
            data: allsites,
            message: "Liste des sites historiques recherchés",
            isError: false,
            isSuccess: true
        }

        return result;
    }catch(error){
        const result: IResponse = {
            data: {},
            message: error,
            isSuccess: true,
            isError: false,
            statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
          };
      
          return result;
    }
}

export {doSearchingSite, getAllSites, getOneSite};