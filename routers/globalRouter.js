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

router.post("/signup", (req, res, next) => {
    console.log(req.body.input_mobile);
    console.log(req.body.input_password);
    console.log(req.body.input_email);
    console.log(req.body.input_name);

    const insertQuery = `
        INSERT INTO users (
            email,
            password,
            name,
            mobile,
            createdAt,
            updatedAt
        ) VALUES (
            "${req.body.input_email}",
            "${req.body.input_password}",
            "${req.body.input_name}",
            "${req.body.input_mobile}",
            now(),
            now()
        )
    `;
    try {
        db.query(insertQuery, (err, rows) => {
            if (!err) {
                return res.redirect("/");
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send("회원가입에 실패했습니다.");
    }
});

module.exports = router;