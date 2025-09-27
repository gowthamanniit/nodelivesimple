//var mongoose=require("mongoose")
import { mongoose } from "mongoose";
var userSchema=new mongoose.Schema({
    rno:{
        type:Number,
        required:true
        },
    sname:{
        type:String,
        required:true
    },
    mark:{
        type:Number,
        required:true
        },
    createdAt:{
        type:Date,
        default:Date.now()
    }
})
//module.exports = mongoose.model("usr",userSchema);
export default mongoose.model("usr",userSchema);