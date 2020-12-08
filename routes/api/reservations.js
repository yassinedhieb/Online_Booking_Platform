const express = require('express');
const router = express.Router();
const multer=require('multer');
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'../Project1 - Copie/client/public/reservations')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload=multer({
    storage:storage
})

const cors=require('cors');
const pdf = require('html-pdf');
const pdfTemplate = require('../../Documents');

const auth=require('../../Middleware/auth');

//Reservation model

const Reservation = require('../../models/Reservation');

// route GET api/Reservations
// Get ALL Reservations 
// access Public
router.use(express.urlencoded({extended:true}))

router.get('/',(req,res)=>{
    Reservation.find()
    .sort({date:-1})
    .then(reservations=>res.json(reservations))
})
//get reservation by id
router.get('/:id',(req,res)=>{
    Reservation.findById(req.params.id)
    .then(reservations=>res.json(reservations))
});
// route POST api/reservations
// create an reservation 
// access Private

router.post('/create-pdf', (req, res) => {
    console.log(req.body)
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    })
    const newResrvation= new Reservation({
        CustomerName:req.body.user.name,
        CustomerContact:req.body.user.email,
        bookedDay:req.body.resDate,
        LocationRef:req.body.ID

    });
    console.log(newResrvation)
    newResrvation.save() ;
});

// find and update
// router.put('/update/:id',upload.single('image'),(req,res)=>{
//     const newReservation= {
//         sector:req.body.sector,
//         governorate:req.body.governorate,
//         maison_dhote:req.body.maison_dhote,
//         num:req.body.num,
//         email:req.body.email,
//         website:req.body.website,
//         image:req.file.originalname,
//         clicks:req.body.clicks

//     };
//     console.log(newReservation)
//     Reservation.findByIdAndUpdate({_id:req.params.id},newReservation)
    
//         .then(()=>res.json("reservation udated"))
//         .catch(err=>res.status(400).json("err"+err))
        
    
// });
// router.put('/updateHost/:id',(req,res)=>{
//     const newReservation= {
//         sector:req.body.sector,
//         governorate:req.body.governorate,
//         maison_dhote:req.body.maison_dhote,
//         num:req.body.num,
//         email:req.body.email,
//         website:req.body.website,
//         image:req.body.image,
//         clicks:req.body.clicks,
//         state:req.body.state

//     };
//     console.log(newReservation)
//     Reservation.findByIdAndUpdate({_id:req.params.id},newReservation)
    
//         .then(()=>res.json("reservation udated"))
//         .catch(err=>res.status(400).json("err"+err))
        
    
// });
// route DELETE api/reservations
// Get delete reservation 
// access Private

router.delete('/:id',(req,res)=>{
    Reservation.findById(req.params.id)
    .then(reservation=>reservation.remove().then(()=>res.json({success:true}))).catch(err=>res.status(404).json({success: false}))
});
module.exports = router;