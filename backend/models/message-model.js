const mongoose=require("mongoose");
const messageSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:String,
    dateAndTime:{
        type:Date,
        default:new Date().toLocaleString()
    }
});
const messageModel=mongoose.model("message",messageSchema);
module.exports=messageModel;