import e, { Router } from "express";
import { sid } from "../routes/candidatesRoute";

const router = Router();

router.post("/sid", sid)

export default router