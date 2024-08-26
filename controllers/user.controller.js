const asyncHandler = require("express-async-handler")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
// const sendEmail = require("../utils/email")

exports.registerUser = asyncHandler(async (req, res) => {

    const { password, email } = req.body
    const isFound = await User.findOne({ email })
    if (isFound) {
        return res.status(400).json({ message: "Email Already Exist" })
    }
    const hashPass = await bcrypt.hash(password, 10)
    await User.create({ ...req.body, password: hashPass })
    // Send Email 
    // await sendEmail({
    //     to: email,
    //     subject: "Registration Success",
    //     message: <h1>Welcome, ${req.body.name}.</h1>
    // })
    res.json({ message: `${req.body.name} Register Successfully` })
})

exports.Userlogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    // step 1
    const result = await User.findOne({ email })
    console.log(result);

    if (!result) {
        return res.status(400).json({ message: "Email Not Found" })
    }

    // Step 2
    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(400).json({ message: "Password Do Not Match" })
    }

    // step 3
    const token = jwt.sign({ userId: result._id }, process.env.JWT_KEY, { expiresIn: "6h" })

    // step 4
    res.cookie("auth-token", token, { httpOnly: true })

    res.json({
        message: "login Success ", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
        }
    })
})
// react madhe kon loging jalela ahe hi imfo => redux madhe auth.user madhe sapdel

exports.logout = asyncHandler(async (req, res) => {
    res.clearCookie("auth-token")
    res.json({ message: "Logout Success" })
})
exports.getProfile = asyncHandler(async (req, res) => {

})