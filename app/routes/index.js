const express = require('express');
const router = express.Router()

router.get("/", (req, res) => {
    res.send("api running");
});

// api comment

router.use("/api/comment", require("./api/comment"));

module.exports = router;