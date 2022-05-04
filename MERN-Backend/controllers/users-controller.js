const { v4 } = require("uuid");
const HttpError = require("../models/http-error");
const User = require("../models/user");

const { validationResult } = require("express-validator");

const DUMMY_USERS = [
  { id: "u1", name: "alex", email: "test4@test.com", password: "test4" },
];

const getUsers = async (req, res, next) => {
  //You can add try and catch block
  const users = await User.find({}, "email name");
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const signUp = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new HttpError("invalid inputs", 422);
    return next(error);
  }
  const { name, email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("oooooi", 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError("oooooi", 422);
    return next(error);
  }

  const createdUser = new User({
    email,
    name,
    image: "http://dfdfddfdfdf.com",
    places: [],
    password,
  });

  try {
    await createdUser.save();
  } catch (err) {
    const error = new HttpError("Created failed", 500);
    return next(error);
  }

  res.status(201).json({ user: createdUser.toObject({ getters: true }) });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  let existingUser;
  try {
    existingUser = await User.findOne({ email: email });
  } catch (err) {
    const error = new HttpError("oooooi", 500);
    return next(error);
  }

  if (!existingUser || existingUser.password !== password) {
    const error = new HttpError("invalid", 401);
    return next(error);
  }

  res.json({ message: "logged in" });
};

exports.getUsers = getUsers;
exports.signUp = signUp;
exports.login = login;
