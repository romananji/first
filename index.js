const express = require('express');
const app = express();
const path=require("path");
app.use(express.static(path.join(__dirname)));
app.use(express.json());
const {open}=require("sqlite");
const sqlite3=require("sqlite3");
const dbPath=path.join(__dirname,"data.db");
let db=null;
const initializeDBAndServer=async function(){
    try{
        db=await open({
            filename:dbPath,
            driver:sqlite3.Database
        })
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    }catch(e){
        console.log(`DB Error:${e.message}`)
        process.exit(1)
    }
}
initializeDBAndServer();
app.get('/', (req, res) => {
    res.sendFile("./index.html",{root:__dirname});
});
app.get("/notes/",async (request,response)=>{
    const getQuery=`
        SELECT * FROM player;
    `
    const result=await db.all(getQuery);
    response.send(result);
})
