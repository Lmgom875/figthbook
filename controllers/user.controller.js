const userCtrl = {};
const User = require("../models/User");

userCtrl.getMultiUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

userCtrl.getOneUser = async (req, res) => {
  const oneUser = await User.findById(req.params.id);
  res.json(oneUser);
};

userCtrl.createOneUser = async (req, res) => {
  const {
    firstName,
    lastName,
    userName,
    password,
    phoneNumber,
    email,
    role,
    address,
    city,
    state,
    zip,
    division,
    boxerHeight,
    boxerReach,
    boxerWins,
    boxerLoses,
    couchName,
    gymName,
    titles,
    licNum,
  } = req.body;

  const newUser = new User({
    firstName,
    lastName,
    userName,
    password,
    phoneNumber,
    email,
    role,
    address,
    city,
    state,
    zip,
    division,
    boxerHeight,
    boxerReach,
    boxerWins,
    boxerLoses,
    couchName,
    gymName,
    titles,
    licNum,
  });
  await newUser.save();
  console.log(newUser);
  res.json({ message: "Usuario Saved" });
};

userCtrl.deleteOneUser = async (req, res) => {
  const oneUser = await User.findByIdAndDelete(req.params.id);
  console.log(oneUser);
  res.json({ message: "Usuario Borrado" });
};

userCtrl.updateOneUser = async (req, res) => {
  const { firstName, lastName, userName } = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    firstName,
    lastName,
    userName,
  });
  res.json({ message: "Usuario Altualizado" });
};

module.exports = userCtrl;
