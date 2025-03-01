require('dotenv').config()

const connectDB = require('./db/connect');
const Product = require('./model/product');
const jsonProducts = require('./products.json');

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.deleteMany();
        await Product.create(jsonProducts);
        console.log("Connected");
    }catch(err){
        console.log(err);
    }
}

start();