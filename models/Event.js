const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  eventName: { type: String, required: true },
  eventDate: { type: Date, required: true },
  address: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String},
},{
    timestamps: true
});

module.exports = model('Event', eventSchema);
