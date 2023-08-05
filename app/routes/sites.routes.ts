import { Router } from "express";
import Paths from "./constants/Paths";
import { allsite, onesite, searchthesite } from "../controllers/sites.controllers";
import { searchSite } from "../repository/site.repository";

const router: Router = Router();

const sitesbase = `${Paths.Base}/${Paths.Site.Base}`;

const allsitepath = `${sitesbase}`;
const detailpath = `${sitesbase}/:id`;
const searchpath = `${Paths.Site.Search}/${sitesbase}`

router.get(allsitepath, allsite);
router.get(detailpath, onesite);
router.get(searchpath, searchthesite);

export {router as SiteRoute};