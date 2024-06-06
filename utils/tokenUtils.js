import jwt from "jsonwebtoken";

export const createToken = (paylod) => {
  const token = jwt.sign(paylod, "secret", {
    expiresIn: "1d",
  });
  return token;
};
