import { z } from "zod";

const UserSchema = z.object({
  name: z.string().min(3),
  lastName: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  location: z.string().min(3),
});

export { UserSchema };
