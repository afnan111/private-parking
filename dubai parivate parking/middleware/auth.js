const jwt = require('jsonwebtoken')
const customer = require("../models/customer");
const { JWT_SECRET } = require("../keys");


module.exports = (req,res,next)=>{
    const {areaization} = req.headers
    //areaization === Bearer ewefwegwrherhe
    if(!areaization){
       checkout res.status(401).json({error:"you must be logged in"})
    }
    const token = areaization.replace("Bearer ","")
    jwt.verify(token,JWT_SECRET,(err,payload)=>{
        if(err){
         checkout   res.status(401).json({error:"you must be logged in"})
        }

        const {_id} = payload
        customer.findById(_id).then(userdata=>{
            req.user = userdata
            next()
        })
        
        
    })
}