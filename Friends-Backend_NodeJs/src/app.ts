import express, { Express } from "express";
import mongoose from "mongoose";
import db from "./common/manager/config";
import bodyParser from "body-parser";
import cors from "cors";
import user from "./user/controller/user";
import auth from "./common/middleware/auth";



const port: number = 8000;
mongoose.connect(db);
const database = mongoose.connection;
database.on("error", (error) => console.error());
database.once("connected", () => console.log("Database Connected"));
const app: Express = express();
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(auth)
app.use(user);

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
  });