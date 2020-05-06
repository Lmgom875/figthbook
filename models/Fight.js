const { Schema, model } = require("mongoose");

const fightSchema = new Schema({
  eventID: { type: String, required: true },
  fighter1ID: {type: String, required: true},
  fighter2ID: {type: String, required: true},
  decision: {type: String},
  winnerID: {type: String},
  loserID: {type: String},
},{
    timestamps: true
});

module.exports = model('Fight', fightSchema);
