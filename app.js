const mongoose =require('mongoose');
const express = require('express');
const config=require('config');
const app = express();
const cors=require('cors');
const pdf = require('html-pdf');
const Reservation = require('./models/Reservation');


const pdfTemplate = require('./documents');
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})
//Boddyparser Middleware;



const db=config.get('mongoURI');


mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true }
,(er)=>{
    if (er){console.log(er)}
    else{console.log("db connected")}});
    
app.use('/api/reservations',require('./routes/api/reservations'))
app.use('/api/locations',require('./routes/api/locations'))
app.use('/api/images',require('./routes/api/images'))
app.use('/api/events',require('./routes/api/events'))
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/messages',require('./routes/api/messages'))
// app.use(express.static('public'));
app.use('/image', express.static('public'));





const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`server is connected on port ${port}`)) ;
