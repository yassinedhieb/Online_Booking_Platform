const mongoose=require('mongoose');
const Schema= mongoose.Schema;

//create Schema

const MessageSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    register_date:{
        type:Date,
        default:Date.now
    }
})

module.exports=Message=mongoose.model('Message',MessageSchema);