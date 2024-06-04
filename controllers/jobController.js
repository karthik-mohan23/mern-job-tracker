import Job from "../models/jobModel.js";

const createJob = async (req, res) => {
  const { company, position } = req.body;
  const newJob = await Job.create({
    company,
    position,
  });
  res.status(201).json(newJob);
};

export { createJob };
