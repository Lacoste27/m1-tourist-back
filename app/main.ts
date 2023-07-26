import express from "express";
import cors from "cors";
import { UserRoute } from "./routes/users.routes";
import dotenv from "dotenv";
import connect from "./models/connection";

const app = express();

dotenv.config();
connect();

app.use(cors());
app.use(express.json());

app.use(UserRoute);

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World  ssssdsds!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
