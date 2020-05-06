const router = require("express").Router();
const { getMultiEvents, getOneEvent, createOneEvent, updateOneEvent, deleteOneEvent } = require('../../controllers/event.controller');

router
  .route("/")
  .get(getMultiEvents)
  .post(createOneEvent);

router
  .route("/event/:id")
  .get(getOneEvent)
  .put(updateOneEvent)
  .delete(deleteOneEvent);

module.exports = router;
