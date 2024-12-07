import { Router } from "express";
const router = Router();

import { getAllJobs, getSingleJob, createJob, updateJob, deleteJob } from "../controllers/jobController.js";
import { validationJobInput, validateIdParam } from "../middlewares/validationMiddleware.js";

router.route("/").get(getAllJobs).post(validationJobInput, createJob);
router.route("/:id").get(validateIdParam, getSingleJob).patch(validationJobInput, validateIdParam, updateJob).delete(validateIdParam, deleteJob);

export default router;
