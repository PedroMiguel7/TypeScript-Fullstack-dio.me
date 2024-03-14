import { Request, Response } from "express";

import { UserService } from "../services/userService";

const userService = new UserService();
export class UserController {
  public createUser = (req: Request, res: Response) => {
    const user = req.body;
    if (!user.name || !user.email)
      return res.status(400).json({ message: "Invalid body" });
    userService.createUser(user.name, user.email);
    return res.status(201).json({ message: "User created" });
  };

  public getAllUsers = (req: Request, res: Response) => {
    const users = userService.getAllUsers();
    return res.status(200).json(users);
  };

  public deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    userService.deleteUser(Number(id));
    return res.status(200).json({ message: "User deleted" });
  };

  public updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const user = req.body;

    if (!user.name || !user.email)
      return res.status(400).json({ message: "Invalid body" });
    userService.updateUser(Number(id), user.name, user.email);
    return res.status(200).json({ message: "User updated" });
  };
}
