import { Router } from "express";
import Paths from "./constants/Paths";
import { all, login, signup } from "../controllers/users.controllers";
import { UserFilter } from "../middleware/user.middleware";
import uservalidator from "../validators/user.validators";

const router: Router = Router();

const usersbase = `${Paths.Base}/${Paths.Users.Base}`;

const signuppath = `${usersbase}/${Paths.Users.Signup}`;
const loginpath = `${usersbase}/${Paths.Users.Login}`;
const allpath = `${usersbase}`;

router.post(signuppath, uservalidator.signup, signup);
router.post(loginpath, uservalidator.login, login);


router.get(allpath, UserFilter, all);

export { router as UserRoute };
