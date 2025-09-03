const express=require("express");
require("dotenv").config();
const dbConnection=require("./config/database-connection");
const app=express();
dbConnection();
const messageModel=require("./models/message-model");
const cors=require("cors");

app.use(cors({origin:process.env.REACT_URL}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("hello");
});

app.post("/contact",async(req,res)=>{
    try{
        const {name,email,message}=req.body;
        if(!name||!email||!message){
            return res.status(400).json({error:"all fields are required"});
        }
        const msg=await messageModel.create({name,email,message});
        res.status(200).json({
            success:true,
            message:"form data sent successfully",
            data:msg
        });
    }
    catch(err){
        console.log(err.message);
        res.status(500).json({error:"Server error, please try again"});
    }
});

app.listen(process.env.PORT,()=>{
    console.log("server is running at port no.",process.env.PORT);
});