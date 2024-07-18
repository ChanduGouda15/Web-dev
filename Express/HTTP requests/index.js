import express from "express";
const app=express();
const port = 3000;

app.get("/",(req,res)=>{ // request and response
    res.send("Hello,world!");
})

app.listen(port,()=>{
    console.log("server is running in port"+port);
})