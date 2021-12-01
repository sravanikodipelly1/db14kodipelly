const mongoose = require("mongoose") 
const pinSchema = mongoose.Schema({ 
 pin_type: {
     type: String,
     minlength: 3
 }, 
 size: {
     type: String,
     maxlength: 10
 }, 
 
}) 
 
module.exports = mongoose.model("pin", 
pinSchema)