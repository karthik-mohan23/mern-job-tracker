import { Router } from "express";
const router = Router();

import { createJob, getAllJobs, getJob } from "../controllers/jobController.js";

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob);

export default router;
