import Job from "../models/jobModel.js";

const getAllJobs = async (req, res) => {
  try {
    const allJobS = await Job.find({});
    res.status(201).json(allJobS);
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

export { getAllJobs, createJob };
