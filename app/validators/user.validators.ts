import { body } from "express-validator";

const uservalidator = {
    signup : [
        body("nom").notEmpty().withMessage("Le champ nom ne peut pas être vide"),
        body("prenom").notEmpty().withMessage("Le champ nom ne peut pas être vide"),
        body("email")
          .isEmail()
          .withMessage("Veuillez fournir une adresse email valide"),
        body("password").notEmpty().withMessage("Le champ mot de passe  ne peut pas être vide"),
    ],
    login : [
        body("email").isEmail().withMessage("Le champ email est incorrect"),
        body("password").notEmpty().withMessage("Le champ mot de passe  ne peut pas être vide"),
    ]
}

export default uservalidator;