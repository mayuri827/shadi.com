const router = require("express").Router()
const usercontroller = require("./../controllers/user.controller")

router
    .post("/user-register", usercontroller.registerUser)
    .post("/user-login", usercontroller.Userlogin)


module.exports = router