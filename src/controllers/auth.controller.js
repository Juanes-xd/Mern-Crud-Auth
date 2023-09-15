import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({
      username,
      email,
      password,
    });
    const userSaved = await newUser.save();
    res.send(userSaved);
  } catch (error) {
    res.send(error);
  }
};

export const login = (req, res) => {};
