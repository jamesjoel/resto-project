require("../config/db");
const mongoose = require("mongoose");
const UserSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String,
    contact : String,
    address : String,
    status : {type : Number, default : 1}
    
})

module.exports = mongoose.model("user", UserSchema);