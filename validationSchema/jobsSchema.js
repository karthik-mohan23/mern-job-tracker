import { z } from "zod";

const JobSchema = z.object({
  company: z.string().min(3),
  position: z.string().min(3),
  jobStatus: z.enum(["interview", "declined", "pending"]),
  jobType: z.enum(["full-time", "part-time", "internship"]),
  jobLocation: z.string().min(3),
});

export { JobSchema };
