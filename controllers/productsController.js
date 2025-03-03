const Product = require('../model/product');


const getAllProductsStatic = async (req, res) => {
    // Select filter method returns documents with only those files which we pass + id
    // Sorts filter method returns documents in asd or desd order acording to fields that we provide
    const products = await Product.find({}).sort('name').select('name price').limit(10).skip(1);

    res.status(200).json({msg:"Success", nbHits: products.length, data:products});
}

const getAllProducts = async (req, res) =>{
    // console.log(req.query);
    const {featured, company, name, sort:sorting, fields, numericFilters} = req.query;
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

    if(numericFilters){
        const operatorMap = {
            '>' : '$gt',
            '>=' : '$gte',
            '=' : '$eq',
            '<' : '$lt',
            '<=':'$lte'
        }

        const regEx = /\b(<|>|<=|>=|=)\b/g;
        let filters = numericFilters.replace(regEx, (match)=>{
            return `-${operatorMap[match]}-`
        })
        
        const options = ['price','rating'];
        filters = filters.split(',').forEach((item)=>{
            const [field, operator, value] = item.split('-');
            if(options.includes(field)){
                queryObj[field] = {[operator]:Number(value)};
            }
        })
    }   

    console.log(queryObj);


    let result = Product.find(queryObj);

    // SORT
    if(sorting){
        const sortList = sorting.split(',').join(' ');
        result = result.sort(sortList);
    }
    else{
        result = result.sort('createdAt');
    }
    
    //FIELDS
    if(fields){
        const fieldList = fields.split(',').join(' ');
        result = result.select(fieldList);
    }

    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    result = result.skip(skip).limit(limit);
 
    const products = await result;
    res.status(200).json({msg:"Success",nbHits: products.length, data:products});
}

const createProduct = async (req, res) =>{
    const product = await Product.create(req.body);
    res.status(201).json({created: true, data: product});
}


module.exports = {getAllProductsStatic, getAllProducts, createProduct};


