require("../config/db");

const mongoose = require("mongoose");
const ContactSchema = mongoose.Schema({
    name : String,
    email : String,
    subject : String,
    message : String
    
})

module.exports = mongoose.model("contact", ContactSchema);