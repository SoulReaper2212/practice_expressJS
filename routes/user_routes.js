const express = require('express');
const router = express.Router();
const {loginMiddleware,authMiddleware} = require("../middleware/user_middleware")



router.get('/user',authMiddleware,(req,res) =>{

    res.send('hello user')

});


router.get('/user-dashboard',authMiddleware,(req,res) =>{

    res.send('this is user dashboard')

});


router.get('/user-login',loginMiddleware,(req,res) =>{

    res.send('you are now logged in')

});

module.exports = router;
