const express = require("express");
const db = require("../db");
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();

router.get("/", checkLogin, (req, res, next) => {
    const loggedIn = req.session.isLoggedIn;

    res.render("screens/main", {loggedIn});
});

router.get("/signin", checkLogin, (req, res, next) => {
    const loggedIn = req.session.isLoggedIn;
    res.render("screens/signin", {loggedIn});
});

router.get("/signup", checkLogin,(req, res, next) => {
    const loggedIn = req.session.isLoggedIn;    
    res.render("screens/signup", {loggedIn});
});

module.exports = router;