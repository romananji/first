const express=require("express");
const app=express();
app.listen(3000,()=>{
    console.log(`app is listening to the server http://localhost:${3000}`)
});
app.get("/",(request,response)=>{
    response.send("hello from the backend,good evening")
})
module.exports=app;