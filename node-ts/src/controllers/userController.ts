import { Request, Response } from "express";

import { UserService } from "../services/userService";

export class UserController {
  private userService: UserService;

  constructor(serviceUser: UserService = new UserService()) {
    this.userService = serviceUser;
  }

  public createUser = (req: Request, res: Response) => {
    const user = req.body;
    if (!user.name || !user.email)
      return res.status(400).json({ message: "Invalid body" });
    this.userService.createUser(user.name, user.email);
    return res.status(201).json({ message: "User created" });
  };

  public getAllUsers = (req: Request, res: Response) => {
    const users = this.userService.getAllUsers();
    return res.status(200).json(users);
  };

  public deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    this.userService.deleteUser(Number(id));
    return res.status(200).json({ message: "User deleted" });
  };

  public updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const user = req.body;

    if (!user.name || !user.email)
      return res.status(400).json({ message: "Invalid body" });
    this.userService.updateUser(Number(id), user.name, user.email);
    return res.status(200).json({ message: "User updated" });
  };
}
