import { Router } from "express";
import authRouter from "./modules/auth/_api";
import usersRouter from "./modules/users/_api";

const router = Router();

router.use(authRouter);
router.use(usersRouter);

export default router;
