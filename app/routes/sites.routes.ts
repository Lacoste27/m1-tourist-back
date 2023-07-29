import { Router } from "express";
import Paths from "./constants/Paths";
import { allsite } from "../controllers/sites.controllers";

const router: Router = Router();

const sitebase = `${Paths.Base}/${Paths.Site.Base}`;

router.get(sitebase, allsite);

export {router as SiteRoute};