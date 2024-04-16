import { Router } from "express";

import { LoginController } from "./controllers/loginController";
import { UserController } from "./controllers/userController";
import { verifyAuth } from "./midlleware/verifyAuth";

export const router = Router();
const userController = new UserController();
const loginController = new LoginController();

router.post("/user", userController.createUser);
router.get("/user", verifyAuth, userController.getUser);
router.put("/user/:id", verifyAuth, userController.updateUser);
router.delete("/user/:id", verifyAuth, userController.deleteUser);
router.get("/users", verifyAuth, userController.getAllUsers);

router.post("/login", loginController.login);
