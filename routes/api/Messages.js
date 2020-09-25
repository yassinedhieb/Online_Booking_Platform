const express = require('express');

const router = express.Router();

const auth=require('../../Middleware/auth');

//message model

const Message = require('../../models/Message');

// route GET api/Messages
// Get ALL Messages 
// access Public

router.get('/',(req,res)=>{
    Message.find()
    .sort({date:-1})
    .then(messages=>res.json(messages))
})
//get message by id
router.get('/:id',(req,res)=>{
    Message.findById(req.params.id)
    .then(messages=>res.json(messages))
});
// route POST api/messages
// create an message 
// access Private

router.post('/',(req,res)=>{
    const newMessage= new Message({
        name:req.body.name,
        email:req.body.email,
        content:req.body.content,
        subject:req.body.subject,
    });
    console.log(newMessage)
    newMessage.save().then(message=>res.json(message))
})
// find and update
router.put('/update/:id',(req,res)=>{
    Message.findByIdAndUpdate({_id:req.params.id},req.body)
        .then(()=>res.json("message updated"))
        .catch(err=>res.status(400).json("err"+err))
    
});

// route DELETE api/messages
// Get delete message 
// access Private

router.delete('/:id',(req,res)=>{
    Message.findById(req.params.id)
    .then(message=>message.remove().then(()=>res.json({success:true}))).catch(err=>res.status(404).json({success: false}))
});
module.exports = router;