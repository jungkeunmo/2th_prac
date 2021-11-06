const checkLogin = (req, res, next) => {
    //사용자가 로그인했어?
    if (req.session.isLoggedIn) {
        next();
    } else {
        req.session.isLoggedIn = false;
        next();
    };
};

module.exports = checkLogin;