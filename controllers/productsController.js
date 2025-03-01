const Product = require('../model/product');


const getAllProductsStatic = async (req, res) => {
    const products = await Product.find({
        featured : 'true' //string converted to boolean type by mongoose then to json
        // feature: true boolean 
    });
    res.status(200).json({msg:"Success", nbHits: products.length, data:products});
}

const getAllProducts = async (req, res) =>{
    console.log(req.query);
    const products = await Product.find(req.query);
    res.status(200).json({msg:"Success", data:products});
}

const createProduct = async (req, res) =>{
    const product = await Product.create(req.body);
    res.status(201).json({created: true, data: product});
}


module.exports = {getAllProductsStatic, getAllProducts, createProduct};


