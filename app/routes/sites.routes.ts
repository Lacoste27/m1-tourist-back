import { Router } from "express";
import Paths from "./constants/Paths";
import { allsite, onesite, searchthesite, postComment } from "../controllers/sites.controllers";
import { searchSite } from "../repository/site.repository";
import sitevalidator from "../validators/sites.validators";

const router: Router = Router();

const sitesbase = `${Paths.Base}/${Paths.Site.Base}`;

const allsitepath = `${sitesbase}`;
const detailpath = `${sitesbase}/:id`;
const searchpath = `${Paths.Base}/${Paths.Site.Search}`
const commentpath = `${Paths.Base}/${Paths.Site.Comment}`

router.get(allsitepath, allsite);
router.get(detailpath, onesite);
router.get(searchpath, searchthesite);

router.post(commentpath, sitevalidator.comment, postComment);

export {router as SiteRoute};