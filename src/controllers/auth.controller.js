import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashPass = await bcryptjs.hash(password, 5);

    const newUser = new User({
      username,
      email,
      password: hashPass,
    });
    const userSaved = await newUser.save();
    res.send(userSaved);
  } catch (error) {
    res.send(error);
  }
};

export const login = (req, res) => {};
