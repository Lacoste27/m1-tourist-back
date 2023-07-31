import { NextFunction, Request, Response } from "express";
import { IResponse } from "../models/types/IResponse";
import HttpStatusCodes from "../others/httpastatuscode";
import Jwt from "jsonwebtoken";
import constants from "../others/constants";

const filter = (request: Request, response: Response, next: NextFunction) => {
  const header = request.headers["authorization"];
  const token = request.headers.authorization?.split(' ')[1];

  console.log(header);

  if (!token) {
    const message: IResponse = {
      data: {},
      message: "Veuillez d'abord vous identifier",
      isError: false,
      isSuccess: true,
      statusCode: HttpStatusCodes.UNAUTHORIZED,
    };
    return response.status(HttpStatusCodes.UNAUTHORIZED).json(message);
  } else if (token != null) {
    try {
      const decodetoken =Jwt.verify(token, constants.secretkey);
      console.log(decodetoken);
      
      next();
    } catch (error) {
      const message: IResponse = {
        data: {},
        message: "Token invalide",
        isError: true,
        isSuccess: false,
        statusCode: HttpStatusCodes.UNAUTHORIZED,
      };
      return response.status(HttpStatusCodes.UNAUTHORIZED).json(message);
    }
  }
};

export { filter as UserFilter };
