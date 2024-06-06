import User from "../models/userModel.js";
import { errorHandler } from "../utils/errorHandler.js";
import { comparePasswords, hashPassword } from "../utils/passwordUtils.js";
import { UserLoginSchema, UserSchema } from "../validationSchema/userSchema.js";

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

    // hash password
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    // to add an admin user
    const isFirstAccount = (await User.countDocuments()) === 0;
    req.body.role = isFirstAccount ? "admin" : "user";

    await User.create(req.body);
    res.status(201).json({ msg: "User successfully registered" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const result = UserLoginSchema.safeParse(req.body);
    if (!result.success) {
      return next(errorHandler(400, "Invalid data"));
    }
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (!userExists) {
      return next(errorHandler(400, "No user found"));
    }
    //compare passwords
    const passwordsMatch = await comparePasswords(
      password,
      userExists.password
    );
    if (!passwordsMatch) {
      return next(errorHandler(400, "Wrong password"));
    }
    res.status(201).json({ msg: "user logged in" });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export { registerUser, loginUser };
