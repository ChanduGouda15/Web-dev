import express from "express";

const app = express();
const port = 3000;





app.get("/",(req,res)=>{
    const today = new Date();
    const day = today.getDay();
    

    let type = "it's weekday";
    let adv = "it's time to concentrate on work";

    if(day === 0 || day === 6)
        {
            type = "it's a weekend";
            adv="it's time to have some fun";
        }

    res.render("day.ejs",{
        dataType:type,
        advice:adv,

    });
});

app.listen(port,()=>{
    console.log("Listening on port"+" "+port);
});