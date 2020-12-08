const mongoose=require('mongoose');
const Schema= mongoose.Schema;

//create Schema

const EventSchema=new Schema({
    host:{
        type:String,
        default:''
    },
    name:{
        type:String,
        required:true
    },
    discription:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    image: {
        type: Array
    },
    attendees:{
        type:Array
    },
    register_date:{
        type:Date,
        default:Date.now
    }
})

module.exports=Event=mongoose.model('Event',EventSchema);