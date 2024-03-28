import { Router } from "express";

import { LoginController } from "./controllers/loginController";
import { UserController } from "./controllers/userController";

export const router = Router();
const userController = new UserController();
const loginController = new LoginController();

router.post("/user", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/user", userController.getUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

router.post("/login", loginController.login);
