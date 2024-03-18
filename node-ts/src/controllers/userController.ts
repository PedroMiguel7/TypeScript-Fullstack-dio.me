import { Request, Response } from "express";

import { UserBusiness } from "../business/userbusiness";
import { User } from "../services/userService";

export class UserController {
  private userBusiness: UserBusiness;

  constructor(businessUser: UserBusiness = new UserBusiness()) {
    this.userBusiness = businessUser;
  }

  public createUser = (req: Request, res: Response) => {
    const resp = this.userBusiness.createUser(req.body);
    return res
      .status(resp.status)
      .json({ message: resp.message, data: resp.data || null });
  };

  public getAllUsers = (_req: Request, res: Response) => {
    const users = this.userBusiness.getAllUsers();
    return res
      .status(users.status)
      .json({ message: users.message, data: users.data });
  };

  public getUser = (req: Request, res: Response) => {
    const { field, value } = req.params;
    const user = this.userBusiness.getUser(field as keyof User, value);
    return res
      .status(user.status)
      .json({ message: user.message, data: user.data || null });
  };

  public deleteUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const resp = this.userBusiness.deleteUser(Number(id));
    return res.status(resp.status).json({ message: resp.message });
  };

  public updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const resp = this.userBusiness.updateUser({ id, ...req.body });
    return res.status(resp.status).json({ message: resp.message });
  };
}
