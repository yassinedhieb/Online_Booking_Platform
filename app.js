const mongoose =require('mongoose');
const express = require('express');
const config=require('config');
const app = express();

//Boddyparser Middleware;

app.use(express.json());

const db=config.get('mongoURI');


mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true }
,(er)=>{
    if (er){console.log(er)}
    else{console.log("db connected")}});
    

app.use('/api/locations',require('./routes/api/locations'))
app.use('/api/users',require('./routes/api/users'))
app.use('/api/auth',require('./routes/api/auth'))
app.use('/api/messages',require('./routes/api/messages'))





const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`server is connected on port ${port}`)) ;
