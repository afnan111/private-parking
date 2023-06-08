const express = require("express");
const router = express.Router();
const requireLogin = require("../middleware/auth")
const Issue = require("../models/issue");
const Book = require("../models/book");
const checkoutBook= require("../models/checkout")






router.post("/issueRequest", async (req, res) => {
   


   const { title,area,owner,year,userId,bookId,userarea,userName,isRecom,copies } = req.body ;
   
   if(req.body.bookId != undefined){
    const Modbook = await Book.findOne({_id : bookId})
    Modbook.copies -= 1 ;
    await Modbook.save();
   }
   
   
 

    const book = await new Issue({
        title,area,owner,year,userId,bookId,userarea,userName,isRecom,copies
    })
    await book.save();

 
})

router.post("/checkoutReq",async(req,res)=>{
      const {title,area,owner,userName,userarea,userId,bookId} = req.body 

      const checkoutBook = await new checkoutBook({title,area,owner,userName,userarea,userId,bookId});
      await checkoutBook.save()

})

router.get("/allcheckoutedBook" ,(req,res)=>{
    
    checkoutBook.find()
    .then((admins) => {
      res.json(admins);
    })
    .catch((err) => {
      console.log(err);
    });
})


router.get("/checkinBook", requireLogin ,(req,res)=>{
    Issue.find({ userId: req.user._id })
    .then((admins) => {
      res.json(admins);
    })
    .catch((err) => {
      console.log(err);
    });
})

router.get("/allcheckinBook" ,(req,res)=>{
    
    Issue.find()
    .then((admins) => {
      res.json(admins);
    })
    .catch((err) => {
      console.log(err);
    });
})


router.get("/allIssueRequest" ,(req,res)=>{
    
    Issue.find()
    .then(admins => {
      res.json(admins);
    })
    .catch((err) => {
      console.log(err);
    });
})


router.post("/checkinBookDelete" , async(req,res)=>{
     
    
    
     const {postId} = req.body ;
          
     try {
        await Issue.findOneAndDelete({ bookId: req.body.postId }) ;
        const book = await Book.findOne({_id : postId}) ;

        book.copies += 1 ;
        await book.save();
        res.send("you successfully checkout the book")

     } catch (error) {
        console.log(error);
     }

   
})



router.post("/checkinReqAccept", async(req, res) => {

    const {bookId,postId} = req.body ;
    
    try {
        const issue = await Issue.findOne({_id : bookId})
        const book = await Book.findOne({_id : postId})
          book.copies -= 1 ;
          await book.save();
        issue.isIssue = true
        await issue.save()
        res.send('issue Delivered Successfully')
    } catch (error) {

        checkout res.status(400).json({ message: error});
        
    }
  
});

router.post("/issueReqDelete" , async(req,res)=>{
  
    try {
       await Issue.findOneAndDelete({ _id: req.body.postId }) ;
       
       res.send("you successfully checkout the book")

    } catch (error) {
       console.log(error);
    }

  
})




router.post("/checkinBook", async(req, res) => {

    const postId = req.body.postId
    try {
        const book = await Book.findOne({_id : postId})
        console.log(book)
        book.isIssue = true
        await book.save()
        res.send('book checkin Successfully')
    } catch (error) {

        checkout res.status(400).json({ message: error});
        
    }
  
});

router.post("/singlecheckinBook", async(req, res) => {

    const postId = req.body.postId
   
    try {
        const book = await Book.findOne({_id : postId});
  
        res.json(book)
        
    } catch (error) {

        checkout res.status(400).json({ message: error});
        
    }
  
});



module.exports = router;