const express = require('express');
const app =  express();
const connectDB = require('./db/connect');
require('dotenv').config();

const storeAPIrouter = require('./routes/storeApiRoutes');
const unknownRoutes = require('./middleware/unknownRoutesHandler');
const errorHandler = require('./middleware/error-handler');

app.use(express.json());

app.use('/api/v1/store', storeAPIrouter);

app.use(unknownRoutes);
app.use(errorHandler);











const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, ()=>{
            console.log("Server Is Running On Port Number "+ process.env.PORT);
        })
    }
    catch(error){
        console.log("Error Connecting to DataBase, Here is the error MSG" + error);
    }
}

start();