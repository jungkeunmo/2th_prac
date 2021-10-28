const express = require("express");
const db = require("../db");
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();

router.get("/", checkLogin, (req, res, next) => {
    const LoggedIn = req.session.isLoggedIn;

    res.render("screens/main", {LoggedIn});
});

router.get("/signin", checkLogin, (req, res, next) => {
    const LoggedIn = req.session.isLoggedIn;
    res.render("screens/signin", {LoggedIn});
});

router.get("/signup", checkLogin,(req, res, next) => {
    const LoggedIn = req.session.isLoggedIn;    
    res.render("screens/signup", {LoggedIn});
});

module.exports = router;