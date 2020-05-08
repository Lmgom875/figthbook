// const { Schema, model } = require("mongoose");
// const bcrypt = require("bcryptjs");

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
mongoose.promise = Promise;

console.log("user model");

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String },
    email: { type: String },
    role: { type: String, require: true },
    address: { type: String },
    city: { type: String },
    state: { type: String },
    zip: { type: String },
    division: { type: String },
    boxerHeight: { type: Number },
    boxerReach: { type: Number },
    boxerWins: { type: Number },
    boxerLoses: { type: Number },
    couchName: { type: String },
    gymName: { type: String },
    titles: { type: String },
    licNum: { type: String },
    picture: { type: String },
    thumbnail: { type: String },
  },
  {
    timestamps: true,
  }
);

// userSchema.method.checkPassword = (inputPassword) => {
//   return bcrypt.compareSync(inputPassword, this.password);
// };
// userSchema.method.hashPassword = (password) => {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
// };
// Define schema methods
userSchema.methods = {
  // This will check if an unhashed password
  // entered by the user can be compared to the hashed password stored in our database
  checkPassword: function(inputPassword) {
    console.log("check")
    return bcrypt.compareSync(inputPassword, this.password);
  },
  // Hash password turns user's password into randomly generated
  // characters so their password isn't exposed inside the database
  hashPassword: plainTextPassword => {
    console.log("hashpassword")
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};

userSchema.pre("save", function (next) {
  console.log("presave", this.password);
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");
    this.password = this.hashPassword(this.password);
    next();
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
