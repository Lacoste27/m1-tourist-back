import express from "express";
import cors from "cors";
import { UserRoute } from "./routes/users.routes";
import { SiteRoute } from "./routes/sites.routes";
import dotenv from "dotenv";
import connect from "./models/connection";

const app = express();

dotenv.config();
connect();

app.use(cors());
app.use(express.json());

app.use(UserRoute);
app.use(SiteRoute);

const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World  ssssdsds!");
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
