const router = require("express").Router();
const passport = require('passport');


router
    .route("/")
    .post(passport.authenticate('local-signup'),
    function(req, res) {
        res.send(req.user._id);
        console.log('desde aignup api' + req.user._id);
    });


module.exports = router;