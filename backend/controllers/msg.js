const messageModel=require("../models/message-model.js");
const sentMessage=async(req,res)=>{
    try{
        const {name,email,message}=req.body;
        if(!name||!email||!message){
            return res.status(400).json({error:"all fields are required"});
        }
        const msg=await messageModel.create({name,email,message});
        if(!msg){
            return res.status(400).json({
                success:false,
                message:"Message failed."
            });
        }
        res.status(200).json({
            success:true,
            message:"Message sent successfully.",
            data:msg
        });
    }
    catch(err){
        res.status(500).json({error:"Server error, please try again"});
    }
}

module.exports=sentMessage;