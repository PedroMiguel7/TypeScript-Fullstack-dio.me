import { Request, Response } from "express";

const db = [
  {
    id: 1,
    name: "Pedro",
    email: "pedro@gmail.com",
  },
];

export class UserController {
  public createUser = (req: Request, res: Response) => {
    const user = req.body;
    if (!user.name || !user.email)
      return res.status(400).json({ message: "Invalid body" });
    db.push(user);
    console.log(db);
    return res.status(201).json({ message: "User created" });
  };
}
