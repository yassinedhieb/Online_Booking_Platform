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

//image model

const Image = require('../../models/Image');

// route GET api/images
// Get ALL images 
// access Public

router.get('/',(req,res)=>{
    Image.find()
    .sort({date:-1})
    .then(images=>res.json(images))
})
//get image by id
router.get('/:id',(req,res)=>{
    Image.findById(req.params.id)
    .then(images=>res.json(images))
});
// route POST api/images
// create an image 
// access Private

router.post('/',upload.single('image'),(req,res)=>{
    const newImage= new Image({
        image:req.file.originalname,
        ref:req.body.ref

    });
    console.log(newImage)
    newImage.save().then(image=>res.json(image))
})
// find and update
router.put('/update/:id',upload.single('image'),(req,res)=>{
    const newImage= {
        image:req.file.originalname,
        ref:req.body.ref
    };
    console.log(newImage)
    Image.findOneAndUpdate({_id:req.params.id},newImage)
    
        .then(()=>res.json("image udated"))
        .catch(err=>res.status(400).json("err"+err))
        
    
});
router.put('/updateHost/:id',(req,res)=>{
    const newImage= {
        image:req.body.image,
        ref:req.body.image

    };
    console.log(newImage)
    Image.findByIdAndUpdate({_id:req.params.id},newImage)
    
        .then(()=>res.json("image udated"))
        .catch(err=>res.status(400).json("err"+err))
        
    
});
// route DELETE api/images
// Get delete image 
// access Private

router.delete('/:id',(req,res)=>{
    Image.findById(req.params.id)
    .then(image=>image.remove().then(()=>res.json({success:true}))).catch(err=>res.status(404).json({success: false}))
});
module.exports = router;