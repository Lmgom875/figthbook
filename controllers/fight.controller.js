const fightCtrl = {};
const Fight = require("../models/Fight");

fightCtrl.getMultiFights = async (req, res) => {
  const fights = await Fight.find();
  res.json(fights);
};

fightCtrl.getOneFight = async (req, res) => {
  const oneFight = await Fight.findById(req.params.id);
  res.json(oneFight);
};

fightCtrl.createOneFight = async (req, res) => {
  const { eventID, fighter1ID, fighter2ID } = req.body;

  const newFight = new Fight({
    eventID,
    fighter1ID,
    fighter2ID,
  });
  await newFight.save();
  console.log(newFight);
  res.json({ message: "Fight Saved" });
};

fightCtrl.deleteOneFight = async (req, res) => {
  const oneFight = await Fight.findByIdAndDelete(req.params.id);
  console.log(oneFight);
  res.json({ message: "Fight Borrado" });
};

fightCtrl.updateOneFight = async (req, res) => {
  const {
    eventID,
    fighter1ID,
    fighter2ID,
    decision,
    winnerID,
    loserID,
  } = req.body;
  await Fight.findByIdAndUpdate(req.params.id, {
    eventID,
    fighter1ID,
    fighter2ID,
    decision,
    winnerID,
    loserID,
  });
  res.json({ message: "Fight Altualizado" });
};

module.exports = fightCtrl;
