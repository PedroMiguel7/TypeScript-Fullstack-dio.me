import { User } from "../entities/user";
import { UserService } from "../services/userService";

export class UserBusiness {
  private userService: UserService;

  constructor(serviceUser: UserService = new UserService()) {
    this.userService = serviceUser;
  }

  createUser = (user: User) => {
    if (!user.name || !user.email || !user.password)
      return { error: "Invalid body" };

    // this.userService.getUser("email", user.email).then((response) => {
    //   if (response) return { error: "User already exists" };
    // });

    return { error: null };
  };

  getUser = (
    field: keyof Pick<User, "id" | "email">,
    value: string | number
  ) => {
    if (!field || !value) return { error: "Invalid params" };
    return { error: null };
  };

  deleteUser = (id: number) => {
    if (!id) return { error: "Invalid params" };

    // this.userService.getUser("id", id).then((response) => {
    //   if (!response) return { error: "User not found" };
    // });

    return { error: null };
  };

  updateUser = (user: User) => {
    if (!user.name || !user.email) return { error: "Invalid body" };

    // this.userService.getUser("id", user.id!).then((response) => {
    //   if (!response) return { error: "User not found" };
    // });

    return { error: null };
  };
}
