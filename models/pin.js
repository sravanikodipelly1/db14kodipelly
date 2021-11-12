const mongoose = require("mongoose") 
const pinSchema = mongoose.Schema({ 
 pin_type: String, 
 size: String, 
 
}) 
 
module.exports = mongoose.model("pin", 
pinSchema)