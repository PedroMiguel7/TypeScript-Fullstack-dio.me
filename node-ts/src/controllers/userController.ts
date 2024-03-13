import { Request, Response } from "express";

import { UserService } from "../services/userService";

export class UserController {
  public createUser = (req: Request, res: Response) => {
    const userService = new UserService();
    const user = req.body;

    if (!user.name || !user.email)
      return res.status(400).json({ message: "Invalid body" });
    userService.createUser(user.name, user.email);
    return res.status(201).json({ message: "User created" });
  };

  public getAllUsers = (req: Request, res: Response) => {
    const userService = new UserService();
    const users = userService.getAllUsers();
    return res.status(200).json(users);
  };
}
