import { User } from "../entities/user";
import { UserService } from "../services/userService";

export class UserBusiness {
  private userService: UserService;

  constructor(serviceUser: UserService = new UserService()) {
    this.userService = serviceUser;
  }

  createUser = async (user: User) => {
    if (!user.name || !user.email || !user.password)
      return { error: "Invalid body" };
    const userExisting = await this.userService.getUser("email", user.email);
    if (userExisting) return { error: "Email is invalid or already taken" };
    return { error: null };
  };

  getUser = (
    field: keyof Pick<User, "id" | "email">,
    value: string | number
  ) => {
    if (!field || !value) return { error: "Invalid params" };
    return { error: null };
  };

  deleteUser = async (id: string) => {
    if (!id) return { error: "Invalid params" };
    const user = await this.userService.getUser("id", id);
    if (!user) return { error: "User not found" };
    return { error: null };
  };

  updateUser = async (user: User) => {
    if (!user.name || !user.email) return { error: "Invalid body" };
    const userExisting = await this.userService.getUser("id", user.id!);
    if (!userExisting) return { error: "User not found" };
    const emailExisting = await this.userService.getUser("email", user.email);
    if (emailExisting && userExisting.email !== emailExisting.email)
      return { error: "Email is invalid or already taken" };
    return { error: null };
  };
}
