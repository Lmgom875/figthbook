const router = require("express").Router();
const userRoutes = require("./users");
const loginRoutes = require("./login");
const eventRoutes = require("./events");
const fightRoutes = require("./fights");



router.use("/users", userRoutes);
router.use("/login", loginRoutes);
router.use("/events", eventRoutes);
router.use("/fights", fightRoutes);

module.exports = router;
