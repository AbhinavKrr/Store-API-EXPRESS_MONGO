const express = require('express');
const app =  express();
const connectDB = require('./db/connect');
require('dotenv').config();



app.get('/', (req, res)=>{
    res.send("Welcome to store API");
})
















const portNo = 3001;

const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(portNo, ()=>{
            console.log("Server Is Running On Port Number 3000");
        })
    }
    catch(error){
        console.log("Error Connecting to DataBase, Here is the error MSG" + error);
    }
}

start();