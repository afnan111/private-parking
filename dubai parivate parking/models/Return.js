const mongoose = require("mongoose");

const checkoutSchema = new mongoose.Schema({

    userId:{
        type: String, 
    },
    userName:{
        type: String, 
    },
    userarea:{
        type: String, 
    },
    bookId:{
        type: String, 
    },
    title: {
        type: String,

    },

    area: {
        type: String,
      
    },

    owner: {
        type: String,
       
    },
    lateFees:{
        type: String,
    },

    year: {
        type: String,
    },
  
    noOfday:{
        type:Number
    },
    ischeckout:{
        type:Boolean,
        default:false
    },
  


}, { timestamps: true });

module.exports = mongoose.model("checkoutBook", checkoutSchema);