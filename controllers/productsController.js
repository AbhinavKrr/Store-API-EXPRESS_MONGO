const Product = require('../model/product');


const getAllProductsStatic = async (req, res) => {

    const products = await Product.find({}).sort('name price');

    res.status(200).json({msg:"Success", nbHits: products.length, data:products});
}

const getAllProducts = async (req, res) =>{
    // console.log(req.query);
    const {featured, company, name, sort:sorting} = req.query;
    const queryObj = {};
    
    if(featured){
        queryObj.featured = featured === 'true'? true : false
    }

    if(company){
        queryObj.company = company
    }

    if(name){
        queryObj.name = {$regex: name, $options: 'i'}
        // $options : 'i' this is for matching uppercase and lowercase
    }

    let result = Product.find(queryObj);

    if(sorting){
        const sortList = sorting.split(',').join(' ');
        result = result.sort(sortList);
    }
    else{
        result = result.sort('createdAt');
    }
    const products = await result;

    res.status(200).json({msg:"Success",nbHits: products.length, data:products});
}

const createProduct = async (req, res) =>{
    const product = await Product.create(req.body);
    res.status(201).json({created: true, data: product});
}


module.exports = {getAllProductsStatic, getAllProducts, createProduct};


