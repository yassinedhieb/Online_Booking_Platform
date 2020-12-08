const mongoose=require('mongoose');
const Schema= mongoose.Schema;

//create Schema

const ImageSchema=new Schema({
    image:{type:String,
        default: ''},
    ref:{type:String, 
    default: ''},
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=Image=mongoose.model('image',ImageSchema);