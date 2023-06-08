const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({


    name: {
        type: String,

    },

    email: {
        type: String,
     
    },

    password: {
        type: String,
        required: true,
    },

    roll_no: {
        type: String,
        required: true,
    },
    area: {
        type: String,
    },
    addmission_year: {
        type: String,
    },
    phone_no: {
        type: Number,
    },
    isAdmin:{
        type:Boolean,
        default:false
    }



}, { timestamps: true });

module.exports = mongoose.model("customer", customerSchema);