import { body } from "express-validator";

const sitevalidator = {
    comment : [
        body("commentaire").notEmpty().withMessage("Le champ commentaire ne peut pas être vide"),
        body("note").notEmpty().withMessage("Le champ note ne peut pas être vide"),
        body("idsite").notEmpty().withMessage("Le champ site ne peut pas être vide"),
        body("username").notEmpty().withMessage("Le champ username ne peut pas être vide"),
    ]
}

export default sitevalidator;