const products = require('../model/product');


const getAllProductsStatic = async (req, res) => {
    throw new Error("error ha pagal");
    res.status(200).json({msg: "products testing route"});
}

const getAllProducts = async (req, res) =>{
    res.status(200).json({msg: "products routes"});
}

const createProduct = async (req, res) =>{
    const product = await products.create(req.body);
    res.status(201).json({created: true, data: product});
}


module.exports = {getAllProductsStatic, getAllProducts, createProduct};