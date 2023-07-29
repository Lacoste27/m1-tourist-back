import { all, signup } from "../repository/user.repository";
import { IUser, IUserRequest } from "../models/types/IUser";
import passwordUtil from "../utils/passwordUtil";
import { User } from "../models/schemas/user";
import { IResponse } from "../models/types/IResponse";
import HttpStatusCodes from "../others/httpastatuscode";

const Signup = async (user: IUser): Promise<IResponse> => {
  try {
    const password: string = await passwordUtil.getHash(user.password);

    const toadd = new User();
    toadd.nom = user.nom;
    toadd.prenom = user.prenom;
    toadd.email = user.email;
    toadd.password = password;

    const _signup = signup(toadd);

    const result: IResponse = {
      data: _signup,
      message: "Utilisateur ajouté",
      isSuccess: true,
      isError: false,
      statusCode: HttpStatusCodes.CREATED,
    };

    return result;
  } catch (error) {
    throw error;
  }
};

const Login = async (user: IUserRequest): Promise<IResponse> => {
  try {
    const result: IResponse = {
      data: "token",
      message: "Utilisateur connecté",
      isSuccess: true,
      isError: false,
      statusCode: HttpStatusCodes.ACCEPTED,
    };

    return result;
  } catch (error) {
    throw error;
  }
};

const All = async () : Promise<IResponse> => {
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
    console.log(error);
    throw error;
  }
};

export { Signup, Login, All };
