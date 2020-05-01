const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true, 
  },
  phoneNumber: {
    type: Number,
  },
  email: {
    type: String
  },
  role: {
    type: String,
    require: true
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  state: {
    type: String
  },
  zip: {
    type: Number
  },
  division: {
    type: String
  },
  boxerHeight: {
    type: Number
  },
  boxerReach: {
    type: Number
  },
  couchName: {
    type: String
  },
  gymName: {
    type: String
  },
  titles: {
    type: String
  },
  licNum: {
    type: String
  }
  
},{
    timestamps: true
});

module.exports = model('User', userSchema);
