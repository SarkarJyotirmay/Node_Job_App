import express from "express";
import { controllers } from "../controller/job.controller.js";

const router = express.Router();

// create job
router.post("/create", controllers.createJob);
// edit job
router.patch("/edit", controllers.editJob);
// delete 
router.delete("/delete", controllers.deletejob);
// list jobs
router.get("/list", controllers.listJobs);

export default router;
