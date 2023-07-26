import { Router } from "express";
import Paths from "./constants/Paths";
import { all, login, signup } from "../controllers/users.controllers";
import { UserFilter } from "../middleware/user.middleware";
import { body } from "express-validator";
import uservalidator from "../validators/user.validators";

const router: Router = Router();

const usersbase = `${Paths.Base}/${Paths.Users.Base}`;

const signuppath = `${usersbase}/${Paths.Users.Signup}`;
const loginpath = `${usersbase}/${Paths.Users.Login}`;

router.post(signuppath, uservalidator.signup, signup);
router.post(loginpath, uservalidator.login, login);

router.use(UserFilter);

router.get(usersbase, all);

export { router as UserRoute };
