const express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
    res.render("../views/home.hbs", {
        body: "It Works!"
    });
});

module.exports = router;