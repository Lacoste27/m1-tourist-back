import dotenv from "dotenv";

dotenv.config();

const constants = {
  secretkey: process.env.JWT_SECRET_KEY,
};

export default constants;
