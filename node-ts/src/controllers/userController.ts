import { Request, Response } from "express";

import { UserBusiness } from "../business/userbusiness";
import { User } from "../entities/user";
import { UserService } from "../services/userService";

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

  public createUser = async (req: Request, res: Response) => {
    const businessResp = await this.userBusiness.createUser(req.body);
    if (businessResp.error) {
      return res.status(400).json({ message: businessResp.error });
    }
    const resp = await this.userService.createUser(req.body);
    return res.status(201).json({ message: "create successfully", data: resp });
  };

  public getAllUsers = async (req: Request, res: Response) => {
    const filters = req.query;
    // console.log(filters);
    const users = await this.userService.getAllUsers();
    return res
      .status(200)
      .json({ message: "Users retrieved successfully", data: users });
  };

  public getUser = async (req: Request, res: Response) => {
    const filters = req.query;
    const field = Object.keys(filters)[0] as keyof GetUser;
    const value = filters[field] as string;

    const businessResp = this.userBusiness.getUser(field, value);
    if (businessResp.error) {
      return res.status(400).json({ message: businessResp.error });
    }

    const user = await this.userService.getUser(field, value);
    return res
      .status(200)
      .json({ message: "User retrieved successfully", data: user });
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

  public updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    const businessResp = await this.userBusiness.updateUser({
      id,
      ...req.body,
    });
    if (businessResp.error) {
      return res.status(400).json({ message: businessResp.error });
    }
    const resp = await this.userService.updateUser({
      id: Number(id),
      ...req.body,
    });
    return res.status(200).json({ message: "User updated", data: resp });
  };
}
