const mongoose = require("mongoose") 
const pinSchema = mongoose.Schema({ 
 pin_type: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("pin", 
pinSchema) 