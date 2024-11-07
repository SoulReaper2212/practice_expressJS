const express = require('express');
const router = express.Router();
const {loginMiddleware,authMiddleware} = require("../middleware/user_middleware")




router.post('/user-dashboard',authMiddleware,(req,res) =>{
    
    res.json({docode:req.user,message:"user authorized and accessed"})
  

});


router.post('/user-login',loginMiddleware,(req,res) =>{
    
    res.json({token:req.token,message:"user logged in"})
 


});

module.exports = router;
