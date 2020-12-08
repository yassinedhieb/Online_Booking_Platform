const mongoose=require('mongoose');
const Schema= mongoose.Schema;

//create Schema

const ReservationSchema=new Schema({
    CustomerName:{type:String,
            required:true,
        default: ''},
    CustomerContact:{type:String,
        required:true,
        default: ''},
    bookedDay:{type:String,
        required:true,
        default: ''},
    LocationRef:'',
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports=Reservation=mongoose.model('reservation',ReservationSchema);