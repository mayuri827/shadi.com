const router = require("express").Router()
const authController = require("./../controllers/auth.controller")

router
    .post("/register-admin", authController.RegisterAdmin)
    .post("/login-admin", authController.LoginAdmin)
    .post("/admin-otp", authController.VerifyOTP)
    .post("/logout-admin", authController.LogoutAdmin)


module.exports = router