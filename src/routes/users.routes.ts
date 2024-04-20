import { Request, Response, Router } from "express";

// New Router intance
const router = Router();

// Users routes
router.get("/users", (req: Request, res: Response) => {
  res.send("Users");
});

router.get("/users/:id", (req: Request, res: Response) => {
  res.send("User by id");
});

export default router;
