import { Request, Response } from "express";
import { sign } from "jsonwebtoken";

export class LoginController {
  login = async (req: Request, res: Response) => {
    const tokenData = {
      name: req.body.name,
      email: req.body.email,
    };

    const tokenKey = "123456789";

    const tokenOptions = {
      subject: tokenData.email,
      expiresIn: "5h",
    };

    const token = sign(tokenData, tokenKey, tokenOptions);

    return res.status(200).json({ token });
  };

  logout = async (req: Request, res: Response) => {};

  constructor() {}
}
