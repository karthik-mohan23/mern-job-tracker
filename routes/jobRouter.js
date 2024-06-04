import { Router } from "express";
const router = Router();

import { createJob } from "../controllers/jobController.js";

router.route("/").post(createJob);

export default router;
