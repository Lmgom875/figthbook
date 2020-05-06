const router = require("express").Router();
const {
  getMultiUsers,
  getOneUser,
  createOneUser,
  updateOneUser,
  deleteOneUser,
} = require("../../controllers/user.controller");


router.route("/").get(getMultiUsers).post(createOneUser);

router
  .route("/users/:id")
  .get(getOneUser)
  .put(updateOneUser)
  .delete(deleteOneUser);

module.exports = router;
