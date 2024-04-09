import { Router } from "express";
import authRouter from "./modules/auth/_api";

const router = Router();

router.use(authRouter);

export default router;
