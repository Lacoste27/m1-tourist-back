import { Request, Response } from "express";
import { All, Login, Signup } from "../services/users.service";
import { validationResult } from "express-validator";
import { IUser, IUserRequest } from "../models/types/IUser";
import { IResponse } from "../models/types/IResponse";
import HttpStatusCodes from "../others/httpastatuscode";

const signup = async (request: Request, response: Response) => {
  try {
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

    const user: IUser = {
      nom: request.body["nom"],
      prenom: request.body["prenom"],
      email: request.body["email"],
      password: request.body["password"],
      salt: "",
    };

    Signup(user).then((result) => {
      return response.status(HttpStatusCodes.CREATED).json(result);
    });
  } catch (error) {
    const result: IResponse = {
      data: {},
      message: error,
      isError: true,
      isSuccess: false,
    };

    return response.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(result);
  }
};

const login = async (request: Request, response: Response) => {
  try {
    const errors = validationResult(request);

    console.log(request.body);
    

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

    const userRequest: IUserRequest = {
      email: request.body["email"],
      password: request.body["password"],
    };

    Login(userRequest).then((result) => {
      return response.status(HttpStatusCodes.CREATED).json(result);
    });
  } catch (error) {
    const result: IResponse = {
      data: {},
      message: error,
      isError: true,
      isSuccess: false,
    };

    return response.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(result);
  }
};

const all = async (request: Request, response: Response) => {
  try {
    All().then((result: IResponse) => {
      return response.status(HttpStatusCodes.OK).json(result);
    });
  } catch (error) {
    const result: IResponse = {
      data: {},
      message: error,
      isError: true,
      isSuccess: false,
    };

    return response.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).json(result);
  }
};

export { signup, login, all };
