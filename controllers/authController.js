import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthorizedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  //hashing goes in the next line
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

//login auth
export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new UnauthorizedError("invalid credentials");
  const isPasswordCorrect = await comparePassword(req.body.password, user.password);
  if (!isPasswordCorrect) throw new UnauthorizedError("invalid credentials");

  const token = createJWT({ userID: user._id, role: user.role });

  res.json({ token });
};
