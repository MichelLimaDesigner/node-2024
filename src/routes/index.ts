import { Router } from "express";
import homeRouter from "./home.routes";
import usersRouter from "./users.routes";

// New Router instance
const router = Router();

// Define express routes
router.use(homeRouter);
router.use(usersRouter);

export default router;
