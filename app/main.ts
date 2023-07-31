import express from "express";
import cors from "cors";
import { UserRoute } from "./routes/users.routes";
import dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

const app = express();

cloudinary.config({
  cloud_name: process.env.CDN_NAME,
  api_key: process.env.CDN_KEY,
  api_secret: process.env.CDN_SECRET,
});

app.use(cors());
app.use(express.json());

app.use(UserRoute);

const port = 3000;

app.get("/", (req, res) => {
  cloudinary.uploader.upload(
    "https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
    { public_id: "olympic_flag" },
    function (error, result) {
      console.log(result);
    }
  );
  res.send("Hello World  ssssdsds!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
