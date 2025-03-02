const Product = require('../model/product');


const getAllProductsStatic = async (req, res) => {
    const search = 'ab';
    const products = await Product.find({
        // featured : 'true' //string converted to boolean type by mongoose then to json
        // featured: true boolean 
        // name: 'emperor bed'
        name:{
            $regex: search, $options: 'i'
        }
    });
    res.status(200).json({msg:"Success", nbHits: products.length, data:products});
}

const getAllProducts = async (req, res) =>{
    // console.log(req.query);
    const {featured, company, name} = req.query;
    const queryObj = {};
    
    if(featured){
        queryObj.featured = featured === 'true'? true : false
    }

    if(company){
        queryObj.company = company
    }

    if(name){
        queryObj.name = {$regex: name, $options: 'i'}
        // $options : 'i' this is for mathing uppercase and lowercase
    }

    const products = await Product.find(queryObj);
    res.status(200).json({msg:"Success",nbHits: products.length, data:products});
}

const createProduct = async (req, res) =>{
    const product = await Product.create(req.body);
    res.status(201).json({created: true, data: product});
}


module.exports = {getAllProductsStatic, getAllProducts, createProduct};


