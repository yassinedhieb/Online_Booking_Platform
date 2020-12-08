const express = require('express');

const router = express.Router();
const multer=require('multer');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../Project1 - Copie/client/public/image')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({
    storage:storage
})

const auth=require('../../Middleware/auth');

//event model

const Event = require('../../models/Event');

// route GET api/Events
// Get ALL Events 
// access Public

router.get('/',(req,res)=>{
    Event.find()
    .sort({date:-1})
    .then(events=>res.json(events))
})
//get event by id
router.get('/:id',(req,res)=>{
    Event.findById(req.params.id)
    .then(events=>res.json(events))
});
// route POST api/events
// create an event 
// access Private

router.post('/',upload.single('image'),(req,res)=>{
    const newEvent= new Event({
        host:req.body.host,
        name:req.body.name,
        discription:req.body.discription,
        date:req.body.date,
        image:req.file.originalname,
        attendees:req.body.attendees

    });
    console.log(newEvent)
    newEvent.save().then(Event=>res.json(Event))
})
// find and update
router.put('/update/:id',(req,res)=>{
    Event.findByIdAndUpdate({_id:req.params.id},req.body)
        .then(()=>res.json("event udated"))
        .catch(err=>res.status(400).json("err"+err))
    
});

// route DELETE api/events
// Get delete event 
// access Private

router.delete('/:id',(req,res)=>{
    Event.findById(req.params.id)
    .then(event=>event.remove().then(()=>res.json({success:true}))).catch(err=>res.status(404).json({success: false}))
});
module.exports = router;