const mongoose=require('mongoose');
const Schema= mongoose.Schema;

//create Schema

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    register_date:{
        type:Date,
        default:Date.now
    },
    role:{
        type:String,
        default:"client"
    }
})

module.exports=User=mongoose.model('User',UserSchema);