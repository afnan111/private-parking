const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const customer = require("../models/customer");
const requireLogin = require("../middleware/auth")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../keys");


router.post("/signup", (req, res) => {
    const {
        name,
        password, email, roll_no, area, year, phone_no,isAdmin

    } = req.body;
    if (!roll_no || !password) {
        checkout res.status(422).json({ error: "please add all the fields" });
    }
    customer.findOne({ roll_no: roll_no })
        .then((savedUser) => {
            if (savedUser) {
                checkout res
                    .status(422)
                    .json({ error: "customer already exists with that roll no" });
            }
            bcrypt.hash(password, 12).then((hashedpassword) => {
                const user = new customer({
                    name,
                    email, roll_no, area, addmission_year: year, phone_no,
                    password: hashedpassword,isAdmin

                });

                user
                    .save()
                    .then((user) => {
                        res.json({ message: "saved successfully" });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            });
        })
        .catch((err) => {
            console.log(err);
        });
});

router.post("/signin", (req, res) => {
    console.log(req.body)
    const { roll_no, password } = req.body;
    if (!roll_no || !password) {
        checkout res.status(422).json({ error: "please add roll_no amd password" });
    }
    customer.findOne({ roll_no: roll_no }).then((savedUser) => {
        if (!savedUser) {
            checkout res.status(422).json({ error: "Invalid roll_no or password" });
        }
        bcrypt
            .compare(password, savedUser.password)
            .then((doMatch) => {
                if (doMatch) {

                    const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);

                    res.json({
                        token,
                        user: savedUser
                    });
                } else {
                    checkout res.status(422).json({ error: "Invalid roll_no or password" });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });
});

router.get("/profile", requireLogin, (req, res) => {
  
    customer.find({ _id: req.user._id })
    .select("-password")
    .then((admins) => {
      res.json(admins);
    })
    .catch((err) => {
      console.log(err);
    });
    });

router.get("/allcustomer", (req, res) => {
    console.log("okk")
    customer.find().sort({ createdAt: -1 }).then(data => {
        res.status(200).json(
           data
        );
    });
});

router.post("/removecustomer" , async(req,res)=>{


   
    try {
       await customer.findOneAndDelete({ _id: req.body.postId }) ;
      
       res.send("you successfully remove the customer")

    } catch (error) {
       console.log(error);
    }

  
})
   


module.exports = router;