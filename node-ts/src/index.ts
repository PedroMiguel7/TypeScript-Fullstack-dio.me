import "reflect-metadata";

import express, { Request, Response } from "express";

import { router } from "./routes";

const server = express();

server.use(express.json());
server.use(router);

const port = 5000;

server.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World" });
});

server.listen(port, () => {});
