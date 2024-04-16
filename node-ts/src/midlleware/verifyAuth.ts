import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function verifyAuth(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authorization.replace("Bearer ", "");

  try {
    jwt.verify(token, "123456789");
    return next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
