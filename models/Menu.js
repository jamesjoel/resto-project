require("../config/db");

const mongoose = require("mongoose");
const MenuSchema = mongoose.Schema({
    name : String,
    mainmenu : String,
    image : { type : String, default : "" },
    price : Number,
    detail : String
    
})

module.exports = mongoose.model("menu", MenuSchema);