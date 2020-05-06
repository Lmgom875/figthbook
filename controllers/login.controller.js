const userCtrl = {};
const User = require("../models/User");
const passport =require("../passport");





userCtrl.createlLogin = async (req, res) => {
  const {
    email,
    password
  } = req.body;

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
