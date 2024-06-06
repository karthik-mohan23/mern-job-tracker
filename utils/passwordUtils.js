import bcrypt from "bcryptjs";

const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const comparePasswords = async (password, hashedPassword) => {
  const isCorrect = await bcrypt.compare(password, hashedPassword);
  return isCorrect;
};

export { hashPassword, comparePasswords };
