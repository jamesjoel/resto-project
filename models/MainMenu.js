require("../config/db");

const mongoose = require("mongoose");
const MainMenuSchema = mongoose.Schema({
    name : String,
    
})

module.exports = mongoose.model("mainmenu", MainMenuSchema);