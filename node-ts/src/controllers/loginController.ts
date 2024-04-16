import { Request, Response } from "express";

import { UserService } from "../services/userService";

export class LoginController {
  userService: UserService;

  constructor(userService = new UserService()) {
    this.userService = userService;
  }

  login = async (req: Request, res: Response) => {
    const token = await this.userService.getToken(
      req.body.email,
      req.body.password
    );
    if (!token) return res.status(401).json({ message: "Invalid credentials" });
    return res.status(200).json({ token });
  };
}
