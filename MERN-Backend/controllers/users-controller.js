const { v4 } = require("uuid");
const HttpError = require("../models/http-error");

const { validationResult } = require("express-validator");

const DUMMY_USERS = [
  { id: "u1", name: "alex", email: "test4@test.com", password: "test4" },
];

const getUsers = (req, res, next) => {
  res.json({ users: DUMMY_USERS });
};

const signUp = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new HttpError("invalid inputs", 422);
  }
  const { name, email, password } = req.body;

  const hasUser = DUMMY_USERS.find((u) => u.email === email);

  if (hasUser) {
    throw new HttpError("couldn't create user", 401);
  }

  const createUser = {
    id: v4(),
    name,
    email,
    password,
  };

  DUMMY_USERS.push(createUser);

  res.status(201).json({ user: createUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  const identifiedUser = DUMMY_USERS.find((u) => u.email === email);
  if (!identifiedUser || identifiedUser.password === password) {
    throw new HttpError("couldn't find user", 401);
  }

  res.json({ message: "logged in" });
};

exports.getUsers = getUsers;
exports.signUp = signUp;
exports.login = login;
