import mongoose, { mongo } from "mongoose";
import jobModel from "../model/job.model.js";

// ! Create Job
const createJob = async (req, res) => {
  let newJob = req.body;
  // console.log(newJob);

  await jobModel.create(newJob);
  res.json({
    message: "Success from Create API",
    created_job: newJob,
  });
};

// ! Edit Job
const editJob = async (req, res) => {
  const fields = {...req.body}
  delete fields._id
  console.log(req.body._id);
  
await jobModel.updateOne({_id: req.body._id}, {$set: {...fields}})
// can be replaced with jobModel.findByIdAndUpdate(req,body._id, {...fields})
 const updatedJob = await jobModel.findOne({_id: req.body._id})
  res.json({
    message: "Job Edited Successfully",
    updaedJob: updatedJob
  });
};

//! Delete Job
const deletejob = async (req, res) => {
  const { id } = req.query;
  await jobModel.deleteOne({ _id: id });
  // can be replaced with jobModel.findByIdAndDelete(req,body._id)
  res.json({
    message: "Job deleted successfully",
  });
};

//! List job
const listJobs = async (req, res) => {
  try {
    const { minSalary } = req.query;

    if (minSalary) {
      const jobs = await jobModel.find({ salary: { $gte: minSalary } });
      res.json({
        message: "Jobs fetched successfully",
        jobs: jobs,
      });
    } else {
      const jobs = await jobModel.find();
      res.json({
        message: "Jobs fetched successfully",
        allJobs: jobs,
      });
    }
  } catch (error) {
    console.log("Error from list jobs api", error);
  }
};

export const controllers = {
  createJob,
  editJob,
  deletejob,
  listJobs,
};
