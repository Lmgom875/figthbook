const router = require("express").Router();
const passport = require('passport');



router
  .route("/")
  .post(passport.authenticate('local-login'));

module.exports = router;