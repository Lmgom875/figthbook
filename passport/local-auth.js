const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/User");

passport.serializeUser((user, done) => {
  done(null, { _id: user._id });
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findOne({ _id: id });
  done(null, user);
});

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req, email, password, done) => {
      const newUser = new User();
      newUser.email = email;
      newUser.password = password;
      newUser.firstName = req.param("firstName");
      newUser.lastName = req.param("lastName");
      newUser.userName = req.param("userName");
      newUser.phoneNumber = req.param("phoneNumber");
      newUser.role = req.param("role;");
      newUser.address = req.param("address");
      newUser.city = req.param("city");
      newUser.state = req.param("state");
      newUser.zip = req.param("zip");
      newUser.division = req.param("division");
      newUser.boxerHeight = req.param("boxerHeight");
      newUser.boxerReach = req.param("boxerReach");
      newUser.boxerWins = req.param("boxerWins");
      newUser.boxerLoses = req.param("boxerLoses");
      newUser.couchName = req.param("couchName");
      newUser.gymName = req.param("gymName");
      newUser.titles = req.param("titles");
      newUser.licNum = req.param("licNum");
      await newUser.save((err, savedUser) => {
        if (err) {
          console.log("Error in Saving user: " + err);
          throw err;
        }
        console.log("User Registration succeful");
        return done(null, newUser);
      });
    }
  )
);

passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    async (req,email, password, done) => {
       const user = await User.findOne({email: email});
       console.log("USER back")
        console.log(user)
       if(!user) {
           return done(null, false);
       }
       if(!user.checkPassword(password)) {
           return done(null, false)
       }
    }
  )
);
