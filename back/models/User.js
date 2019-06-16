const mongoose = require("mongoose")
const Schema = mongoose.Schema

module.exports = mongoose.model("user", new Schema({
    name: String,
    password: String,
    campus: String,
    course: String,
    profilePic: String
}))