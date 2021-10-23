const express = require("express");
const db = require("../db");

const router = express.Router();

router.get("/", (req, res, next) => {
    res.render("screens/main");
});

router.get("/signin", (req, res, next) => {
    res.render("screens/signin");
});

router.get("/signup", (req, res, next) => {
    res.render("screens/signup");
});

module.exports = router;