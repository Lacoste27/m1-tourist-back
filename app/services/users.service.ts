import { all, findbyemail, signup } from "../repository/user.repository";
import { IUser, IUserRequest, IUserResponse } from "../models/types/IUser";
import passwordUtil from "../utils/passwordUtil";
import { User } from "../models/schemas/user";
import { IResponse } from "../models/types/IResponse";
import HttpStatusCodes from "../others/httpastatuscode";
import constants  from "../others/constants";
import Jwt from "jsonwebtoken";

const Signup = async (user: IUser): Promise<IResponse> => {
  try {
    const password: string = await passwordUtil.getHash(user.password);

    

    const toadd = new User();
    toadd.nom = user.nom;
    toadd.prenom = user.prenom;
    toadd.email = user.email;
    toadd.password = password;

    const _signup = await signup(toadd);


    const users: IUserResponse = {
      nom: toadd.nom,
      prenom: toadd.prenom,
      email: toadd.email,
    };

    const paylod = {
      nom: _signup.nom,
      prenom: _signup.prenom,
      email: _signup.email,
    };


    const token = Jwt.sign(paylod, constants.secretkey, { expiresIn: "5h" });

    users.token = token;
    
    const result: IResponse = {
      data: users,
      message: "Utilisateur ajouté",
      isSuccess: true,
      isError: false,
      statusCode: HttpStatusCodes.CREATED,
    };

    return result;
  } catch (error) {
    if (error.code === 11000) {
      const result: IResponse = {
        data: {},
        message: "Cette adresse email est déjà utilisé",
        isSuccess: true,
        isError: false,
        statusCode: HttpStatusCodes.CONFLICT,
      };

      return result;
    } else {
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
};

const Login = async (user: IUserRequest): Promise<IResponse> => {
  try {
    const finduser: IResponse = await FindByEmail(user.email);

    if (!(Object.keys(finduser.data).length === 0)) {
      const response: IUser = finduser.data;

      const users: IUserResponse = {
        nom: response.nom,
        prenom: response.prenom,
        email: response.email,
      };

      const paylod = {
        nom: users.nom,
        prenom: users.prenom,
        email: users.email,
      };

      const secretkey: string = constants.secretkey;

      const token = Jwt.sign(paylod, constants.secretkey, { expiresIn: "5h" });

      users.token = token

      const result: IResponse = {
        data: users,
        message: "Utilisateur connecté",
        isError: false,
        isSuccess: true,
        statusCode: HttpStatusCodes.ACCEPTED,
      };

      return result;
    } else if (Object.keys(finduser.data).length === 0) {
      const result: IResponse = {
        data: {},
        message: "Utilisateur non trouvé",
        isError: false,
        isSuccess: true,
        statusCode: HttpStatusCodes.NOT_FOUND,
      };

      return result;
    }
  } catch (error) {
    const result: IResponse = {
      data: {},
      message: error,
      isSuccess: false,
      isError: true,
      statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    };

    return result;
  }
};

const All = async (): Promise<IResponse> => {
  try {
    const getAll = await all();

    const result: IResponse = {
      data: getAll,
      message: "Liste des utilisateurs",
      isError: false,
      isSuccess: true,
    };

    return result;
  } catch (error) {
    const result: IResponse = {
      data: {},
      message: error,
      isSuccess: true,
      isError: false,
      statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    };

    return result;
  }
};

const FindByEmail = async (email: string): Promise<IResponse> => {
  try {
    const user = await findbyemail(email);

    if (user != null) {
      const result: IResponse = {
        data: user,
        message: "Utilisateur par email",
        isError: false,
        isSuccess: true,
        statusCode: 202,
      };

      return result;
    } else if (user === null) {
      const result: IResponse = {
        data: {},
        message: "Utilisateur non trouvés",
        isError: false,
        isSuccess: true,
        statusCode: 202,
      };

      return result;
    }
  } catch (error) {
    const result: IResponse = {
      data: {},
      message: error,
      isSuccess: true,
      isError: false,
      statusCode: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    };

    return result;
  }
};

export { Signup, Login, All, FindByEmail };
