const eventCtrl = {};
const Event = require("../models/Event");

eventCtrl.getMultiEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

eventCtrl.getOneEvent = async (req, res) => {
  const oneEvent = await Event.findById(req.params.id);
  res.json(oneEvent);
};

eventCtrl.createOneEvent = async (req, res) => {
  const {
    eventName,
    eventDate,
    address,
    city,
    state,
    zip,
  } = req.body;

  const newEvent = new Event({
    eventName,
    eventDate,
    address,
    city,
    state,
    zip,
  });
  await newEvent.save();
  console.log(newEvent);
  res.json({ message: "Event Saved" });
};

eventCtrl.deleteOneEvent = async (req, res) => {
  const oneEvent = await Event.findByIdAndDelete(req.params.id);
  console.log(oneEvent);
  res.json({ message: "Event Borrado" });
};

eventCtrl.updateOneEvent = async (req, res) => {
  const { eventName, eventDate, address, city, state, zip } = req.body;
  await Event.findByIdAndUpdate(req.params.id, {
    eventName,
    eventDate,
    address,
    city,
    state,
    zip,
  });
  res.json({ message: "Event Altualizado" });
};

module.exports = eventCtrl;
