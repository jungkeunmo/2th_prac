const express = require("express");
const db = require("../db");
const checkLogin = require("../middlewares/checkLogin");

const router = express.Router();

router.get("/list", checkLogin, (req, res, next) => {
    const LoggedIn = req.session.isLoggedIn;
    res.render("screens/board/list" , {LoggedIn});
});

router.get("/detail", checkLogin, (req, res, next) => {
    const LoggedIn = req.session.isLoggedIn;
    res.render("screens/board/detail" , {LoggedIn});
});

router.get("/update", checkLogin, (req, res, next) => {
    const LoggedIn = req.session.isLoggedIn;
    res.render("screens/board/update" , {LoggedIn});
});

router.get("/write", checkLogin, (req, res, next) => {
    const LoggedIn = req.session.isLoggedIn;
    res.render("screens/board/write" , {LoggedIn});
});

module.exports = router;