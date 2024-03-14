import { Router } from "express";
import { UserController } from "./controllers/userController";

export const router = Router();
const userController = new UserController();

router.post("/user", userController.createUser);
router.get("/user", userController.getAllUsers);
router.delete("/user/:id", userController.deleteUser);
router.put("/user/:id", userController.updateUser);
