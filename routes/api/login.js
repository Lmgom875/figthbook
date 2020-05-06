const router = require("express").Router();
//const { getMultiUsers } = require("../../controllers/user.controller");


router.post('/login', function (req, res, next) {
    res("desde login")
});

// router
//   .route("/users/:id")
//   .get(getOneUser)
//   .put(updateOneUser)
//   .delete(deleteOneUser);

module.exports = router;