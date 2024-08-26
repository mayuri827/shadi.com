const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    religion: { type: String, required: true },
    education: { type: String, required: true },
    country: { type: String, required: true },
})

module.exports = mongoose.model("user", userSchema)