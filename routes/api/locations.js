const express = require('express');

const router = express.Router();

const auth=require('../../Middleware/auth');

//location model

const Location = require('../../models/Location');

// route GET api/locations
// Get ALL locations 
// access Public

router.get('/',(req,res)=>{
    Location.find()
    .sort({date:-1})
    .then(locations=>res.json(locations))
})
//get location by id
router.get('/:id',(req,res)=>{
    Location.findById(req.params.id)
    .then(locations=>res.json(locations))
});
// route POST api/locations
// create an location 
// access Private

router.post('/',(req,res)=>{
    const newLocation= new Location({
        sector:req.body.sector,
        governorate:req.body.governorate,
        maison_dhote:req.body.maison_dhote,
        num:req.body.num,
        email:req.body.email,
        website:req.body.website,
        image:req.body.image

    });
    console.log(newLocation)
    newLocation.save().then(location=>res.json(location))
})
// find and update
router.put('/update/:id',(req,res)=>{
    Location.findByIdAndUpdate({_id:req.params.id},req.body)
        .then(()=>res.json("location udated"))
        .catch(err=>res.status(400).json("err"+err))
    
});

// route DELETE api/locations
// Get delete location 
// access Private

router.delete('/:id',(req,res)=>{
    Location.findById(req.params.id)
    .then(location=>location.remove().then(()=>res.json({success:true}))).catch(err=>res.status(404).json({success: false}))
});
module.exports = router;