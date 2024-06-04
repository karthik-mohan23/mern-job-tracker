import { Router } from "express";
const router = Router();

import { createJob, getAllJobs, getJob } from "../controllers/jobController.js";

router.route("/").get(getAllJobs).get(getJob).post(createJob);

export default router;
