import { Router } from "express";
import Paths from "./constants/Paths";
import { all, login, signup } from "../controllers/users.controllers";
import { UserFilter } from "../middleware/user.middleware";
import { body } from "express-validator";
import uservalidator from "../validators/user.validators";
import { All } from "../services/users.service";

const router: Router = Router();

const usersbase = `${Paths.Base}/${Paths.Users.Base}`;

const signuppath = `${usersbase}/${Paths.Users.Signup}`;
const loginpath = `${usersbase}/${Paths.Users.Login}`;
const allpath = `${usersbase}`;;

router.post(signuppath, uservalidator.signup, signup);
router.post(loginpath, uservalidator.login, login);

router.use(UserFilter);

router.get(allpath, all);

export { router as UserRoute };
