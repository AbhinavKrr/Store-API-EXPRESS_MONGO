const express = require('express');
const app =  express();
const connectDB = require('./db/connect');
require('dotenv').config();

// AYSC WRAPPER MIDDLE WARE FUNCTIONANLITY IN THIS BELOW PACKAGE
require('express-async-errors');

const productRouter = require('./routes/productsRoutes');
const unknownRoutes = require('./middleware/unknownRoutesHandler');
const errorHandler = require('./middleware/error-handler');

app.use(express.json());


// Routes
app.get('/', (req, res) =>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products Route</a>');
})

app.use('/api/v1/products', productRouter);


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
        console.log("Error Connecting to DataBase, Here is the error MSG: " + error);
    }
}

start();