const mongoose=require('mongoose');
const Schema= mongoose.Schema;

//create Schema

const LocationSchema=new Schema({
    sector:{type:String,
            // required:true
        default: ''},
    governorate:{type:String,
        // required:true
        default: ''},
    maison_dhote:{type:String,
        // required:true
        default: ''},
    num:{type:Number},
    email:{type:String,
        default: ''},
    website:{type:String
        ,default: ''},
    clicks:{
        type:Number,
        default:0
    },
    state:{
        type:String,
        default:'confirmed'
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=Location=mongoose.model('location',LocationSchema);