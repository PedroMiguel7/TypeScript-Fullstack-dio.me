import { Router } from "express";
import { UserController } from "./controllers/userController";

export const router = Router();
const userController = new UserController();

router.post("/user", userController.createUser);
router.get("/users", userController.getAllUsers);
router.get("/user", userController.getUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);
