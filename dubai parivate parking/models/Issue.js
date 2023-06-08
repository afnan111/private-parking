const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({

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

    year: {
        type: String,
    },
  
    noOfday:{
        type:Number
    },
    isIssue:{
        type:Boolean,
        default:false
    },
    isRecom:{
        type:Boolean,
        default:false
    }



}, { timestamps: true });

module.exports = mongoose.model("Issue", IssueSchema);