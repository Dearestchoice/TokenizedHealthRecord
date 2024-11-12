const express = require("express");
const { signup, signin, forgotPassword } = require("../controllers/UserController");


const router = express.Router();


router.post("/signup", signup);
router.post("/signin", signin);
router.post("/forgot-password", forgotPassword);


module.exports = router;