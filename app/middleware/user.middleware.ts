import { NextFunction, Request, Response } from "express";
import { IResponse } from "../models/types/IResponse";
import { jwt } from "jsonwebtoken";
import HttpStatusCodes from "../others/httpastatuscode";

const filter = (request: Request, response: Response, next: NextFunction) => {
  const header = request.headers["authorization"];
  const token = header && header.split(" ")[1];

  if (token === null) {
    const message: IResponse = {
      data: {},
      message: "Veuillez d'abord vous identifier",
      isError: false,
      isSuccess: true,
      statusCode: HttpStatusCodes.UNAUTHORIZED,
    };
    return response.status(HttpStatusCodes.UNAUTHORIZED).json(message);
  }
  next(request);
};

export { filter as UserFilter };