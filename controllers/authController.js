import User from "../models/UserModel.js";
import { StatusCodes } from "http-status-codes";
import { comparePassword, hashPassword } from "../utils/passwordUtils.js";
import { UnauthorizedError } from "../errors/customErrors.js";
import { createJWT } from "../utils/tokenUtils.js";

//register auth
export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  //hashing goes in the next line
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ msg: "user created" });
};

//login functionality
export const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new UnauthorizedError("invalid credentials");
  const isPasswordCorrect = await comparePassword(req.body.password, user.password);
  if (!isPasswordCorrect) throw new UnauthorizedError("invalid credentials");

  const token = createJWT({ userId: user._id, role: user.role });

  //cookie's expiration time is in millisecond we can't pass string like '1h' or '1d' like we used to do in JWT. hence the conversion in the below line.
  const oneDay = 1000 * 60 * 60 * 24;
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ msg: "user logged in" });
};

//logout functionality

export const logout = (req, res) => {
  res.cookie("token", "logout", {
    httpOnly: true,
    expires: new Date(Date.now()),
  }),
    res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};
