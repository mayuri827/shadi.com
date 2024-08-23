const router = require("express").Router()
const usercontroller = require("./../controllers/user.controller")

router
    .post("/user-login", usercontroller.Userlogin)


module.exports = router