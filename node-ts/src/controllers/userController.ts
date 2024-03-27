import { Request, Response } from "express";

import { UserBusiness } from "../business/userbusiness";
import { UserService } from "../services/userService";
import { User } from "../entities/user";

interface GetUser extends Pick<User, "id" | "email"> {}

export class UserController {
  private userBusiness: UserBusiness;
  private userService: UserService;

  constructor(
    businessUser: UserBusiness = new UserBusiness(),
    userService: UserService = new UserService()
  ) {
    this.userBusiness = businessUser;
    this.userService = userService;
  }

  public createUser = (req: Request, res: Response) => {
    const businessResp = this.userBusiness.createUser(req.body);
    if (businessResp.error) {
      return res.status(400).json({ message: businessResp.error });
    }
    const resp = this.userService.createUser(req.body);
    return res.status(201).json({ message: "create success full", data: resp });
  };

  public getAllUsers = (req: Request, res: Response) => {
    const users = this.userService.getAllUsers();
    return res.status(200).json({ message: "", data: users });
  };

  public getUser = (req: Request, res: Response) => {
    const { field, value } = req.params;
    const businessResp = this.userBusiness.getUser(
      field as keyof GetUser,
      value
    );
    if (businessResp.error) {
      return res.status(400).json({ message: businessResp.error });
    }

    const user = this.userService.getUser(field as keyof GetUser, value);
    return res.status(200).json({ message: "", data: user });
  };

  public deleteUser = async (req: Request, res: Response) => {
    const { id } = req.params;

    const businessResp = await this.userBusiness.deleteUser(Number(id));
    if (businessResp.error) {
      return res.status(400).json({ message: businessResp.error });
    }

    this.userService.deleteUser(Number(id));
    return res.status(200).json({ message: "User deleted!" });
  };

  public updateUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const businessResp = this.userBusiness.updateUser({ id, ...req.body });
    if (businessResp.error) {
      return res.status(400).json({ message: businessResp.error });
    }
    const resp = this.userService.updateUser({ id: Number(id), ...req.body });
    return res.status(200).json({ message: "User updated", data: resp });
  };
}
