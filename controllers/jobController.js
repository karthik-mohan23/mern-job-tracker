import Job from "../models/jobModel.js";
import { errorHandler } from "../utils/errorHandler.js";
import { JobSchema } from "../validationSchema/jobsSchema.js";

const getAllJobs = async (req, res, next) => {
  try {
    const allJobS = await Job.find({});
    res.status(200).json(allJobS);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const getJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      console.log("Invalid id");
      return next(errorHandler(400, "Something went wrong"));
    }
    const job = await Job.findById(id);
    if (!job) {
      console.log("Job not found");
      return next(errorHandler(400, "Something went wrong"));
    }
    res.status(200).json(job);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createJob = async (req, res, next) => {
  try {
    const result = JobSchema.safeParse(req.body);
    if (!result.success) {
      console.log(result.error);
      return next(errorHandler(400, "Invalid data"));
    }
    const newJob = await Job.create(req.body);
    res.status(201).json(newJob);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const deleteJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      console.log("Job not found");
      return next(errorHandler(400, "Something went wrong"));
    }
    await Job.deleteOne({ _id: id });
    res.status(200).json({ msg: "successfully deleted" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const updateJob = async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    if (!job) {
      console.log("Job not found");
      return next(errorHandler(400, "Something went wrong"));
    }
    const result = JobSchema.safeParse(req.body);
    if (!result.success) {
      console.log(result.error);
      return next(errorHandler(400, "Invalid data"));
    }
    const newJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(newJob);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getAllJobs, getJob, createJob, updateJob, deleteJob };
