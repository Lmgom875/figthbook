const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema({
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
  zip: { type: String},
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
  thumbnail: { type: String }
},{
    timestamps: true
});

// Define schema methods
userSchema.methods = {
  // This will check if an unhashed password
  // entered by the user can be compared to the hashed password stored in our database
  checkPassword: function(inputPassword) {
    return bcrypt.compareSync(inputPassword, this.password);
  },
  // Hash password turns user's password into randomly generated
  // characters so their password isn't exposed inside the database
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10);
  }
};
// Define hooks for pre-saving
// Hooks are automatic methods that run during various phases of the User Model lifecycle
// In this case, before a User is created, we will automatically hash their password
userSchema.pre("save", function(next) {
  if (!this.password) {
    console.log("models/user.js =======NO PASSWORD PROVIDED=======");
    next();
  } else {
    console.log("models/user.js hashPassword in pre save");
    this.password = this.hashPassword(this.password);
    next();
  }
})


module.exports = model('User', userSchema);