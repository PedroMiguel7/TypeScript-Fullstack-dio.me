import express, { Request, Response } from "express";

const server = express();

server.use(express.json());

const port = 5000;

server.get("/", (req: Request, res: Response) => {
  return res.status(200).json({ message: "Hello World" });
});

server.post("/user", (req: Request, res: Response) => {
  const body = req.body;
  console.log(body);
  return res.status(201).json({ message: "User created" });
});

server.listen(port, () => {
  console.log("Server is running on port " + port);
});
