import { Router } from "express";
const router = Router();

import { createJob, getAllJobs } from "../controllers/jobController.js";

router.route("/").get(getAllJobs).post(createJob);

export default router;
