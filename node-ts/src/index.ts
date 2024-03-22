import "reflect-metadata";

import express, { Request, Response } from "express";

import { AppDataSource } from "./database";
import { router } from "./routes";

const server = express();

AppDataSource.initialize()
  .then(() => {
    console.log("Database is running");
  })
  .catch((error) => {
    console.log("Error on database connection: " + error);
  });

server.use(express.json());
server.use(router);

const port = 5000;

server.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World" });
});

server.listen(port, () => {
  console.log("Server is running on port " + port);
});
