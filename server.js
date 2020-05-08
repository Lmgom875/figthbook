const express = require("express");
const passport = require("passport");
const session = require("express-session");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
require('./passport/local-auth');
const PORT = process.env.PORT || 3001; 

// Define middleware here

// Passport
app.use(session({
  secret: "mysecretsession",
  resave: false,
  saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/fightbookDB", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
})

// Start the API server
app.listen(PORT, function() {
  console.log(`API listening on PORT ${PORT}!`);
});
