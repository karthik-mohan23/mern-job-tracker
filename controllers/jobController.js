import Job from "../models/jobModel.js";

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
    const job = await Job.findById(id);
    res.status(200).json(job);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const createJob = async (req, res, next) => {
  try {
    const { company, position } = req.body;
    const newJob = await Job.create({
      company,
      position,
    });
    res.status(201).json(newJob);
  } catch (error) {
    console.log(error);
    next(error);
  }
};
const deleteJob = async (req, res, next) => {
  try {
    const { id } = req.params;
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
    const newJob = await Job.findByIdAndUpdate(id, req.body, { new: true });
    res.status(201).json(newJob);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { getAllJobs, getJob, createJob, updateJob, deleteJob };
