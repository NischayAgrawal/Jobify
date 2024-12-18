import { Router } from "express";
const router = Router();

import { getAllJobs, getSingleJob, createJob, updateJob, deleteJob, showStats } from "../controllers/jobController.js";
import { validationJobInput, validateIdParam } from "../middlewares/validationMiddleware.js";
import { checkForTestUser } from "../middlewares/authMiddleware.js";

router.route("/").get(getAllJobs).post(checkForTestUser, validationJobInput, createJob);

router.route("/stats").get(showStats);

router.route("/:id").get(validateIdParam, getSingleJob).patch(checkForTestUser, validationJobInput, validateIdParam, updateJob).delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
