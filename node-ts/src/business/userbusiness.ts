import { User, UserService } from "../services/userService";

export class UserBusiness {
  private userService: UserService;

  constructor(serviceUser: UserService = new UserService()) {
    this.userService = serviceUser;
  }

  createUser = (user: User) => {
    if (!user.name || !user.email)
      return { status: 400, message: "Invalid body" };
    return this.userService.createUser(user);
  };

  getAllUsers = () => {
    return this.userService.getAllUsers();
  };

  getUser = (field: keyof User, value: string | number) => {
    return this.userService.getUser(field, value);
  };

  deleteUser = (id: number) => {
    return this.userService.deleteUser(id);
  };

  updateUser = (user: User) => {
    if (!user.name || !user.email)
      return { status: 400, message: "Invalid body" };
    return this.userService.updateUser(user);
  };
}
