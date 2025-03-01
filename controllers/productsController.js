const products = require('../model/product');


const getAllProductsStatic = async (req, res) => {
    res.status(200).json({msg: "products routes"});
}

const getAllProducts = async (req, res) =>{
    const products_ = await products.find({});
    res.status(200).json({msg:"Success", data:products_});
}

const createProduct = async (req, res) =>{
    const product = await products.create(req.body);
    res.status(201).json({created: true, data: product});
}


module.exports = {getAllProductsStatic, getAllProducts, createProduct};

