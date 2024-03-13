import express, { Request, Response } from "express";

import { UserController } from "./controllers/userController";

const userController = new UserController();

const server = express();

server.use(express.json());

const port = 5000;

server.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World" });
});

server.post("/user", userController.createUser);

server.get("/user", userController.getAllUsers);

server.listen(port, () => {
  console.log("Server is running on port " + port);
});
