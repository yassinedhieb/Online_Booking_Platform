const express = require('express');

const router = express.Router();

const bcrypt =require('bcrypt');

const config=require('config');
const jwt=require('jsonwebtoken');
const auth=require('../../Middleware/auth');


//USER model

const User = require('../../models/User');

// route GET api/auth
// auth the user 
// access Public

router.post('/',(req,res)=>{
    const {email,password}=req.body;
    ///validation
    if(!email||!password){
        return res.status(400).json({msg:'please enter all fields'})

         
    }
    //check for existing 
    User.findOne({email}).then(user=>{
        if(!user)
            return res.status(400).json({msg:'user does not exists'})
        
        //Valid password
        bcrypt.compare(password,user.password)
        .then(isMatch=>{
            if(!isMatch) return res.status(400).json({msg:'Invalid credentials'})
            jwt.sign(
                {id:user.id},config.get('jwtSecret'),
                {expiresIn:3600},
                (err,token)=>{
                    if(err) throw err;
                    res.json({
                        token,
                        user:{
                            id:user.id,
                            name:user.name,
                            email:user.email
                        }
                    })
                }
            )
        })
    })
})

//get api/auth/user
// Auth Get user data
// private

router.get('/user',auth,(req,res)=>{
    User.findById(req.user.id)
    .select('-password')
    .then(user=>res.json(user));
})

module.exports = router;