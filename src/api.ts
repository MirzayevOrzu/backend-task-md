import { Router } from "express";
import usersRouter from "./modules/auth/_api";

const router = Router();

router.use(usersRouter);

export default router;
