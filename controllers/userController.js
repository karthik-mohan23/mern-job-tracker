import User from "../models/userModel.js";
import { errorHandler } from "../utils/errorHandler.js";
import { UserSchema } from "../validationSchema/userSchema.js";

const registerUser = async (req, res, next) => {
  try {
    const result = UserSchema.safeParse(req.body);
    if (!result.success) {
      console.log(result.error);
      return next(errorHandler(400, "Invalid data"));
    }

    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return next(errorHandler(400, "user already exists"));
    }

    // to add an admin user
    const isFirstAccount = (await User.countDocuments()) === 0;
    req.body.role = isFirstAccount ? "admin" : "user";

    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(errorHandler(400, "Invalid data"));
    }
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return next(errorHandler(400, "No user found"));
    }
    res.status(201).json({ msg: "user logged in" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { registerUser, loginUser };
