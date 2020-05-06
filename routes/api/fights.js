const router = require("express").Router();
const {
  getMultiFights,
  getOneFight,
  createOneFight,
  updateOneFight,
  deleteOneFight,
} = require("../../controllers/fight.controller");

router.route("/").get(getMultiFights).post(createOneFight);

router
  .route("/fight/:id")
  .get(getOneFight)
  .put(updateOneFight)
  .delete(deleteOneFight);

module.exports = router;
