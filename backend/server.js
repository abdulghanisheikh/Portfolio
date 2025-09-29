const express=require("express");
require("dotenv").config();
const sentMessage=require("./controllers/msg.js");
const dbConnection=require("./config/database-connection");
const app=express();
dbConnection();
const cors=require("cors");

app.use(cors({origin:process.env.REACT_URL}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Server running");
});
app.post("/contact",sentMessage);

app.listen(process.env.PORT,()=>{
    console.log("server is running at port no.",process.env.PORT);
});