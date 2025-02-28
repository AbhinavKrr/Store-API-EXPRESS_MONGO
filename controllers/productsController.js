

const getAllProductsStatic = async (req, res) => {
    throw new Error("error ha pagal");
    res.status(200).json({msg: "products testing route"});
}

const getAllProducts = async (req, res) =>{
    res.status(200).json({msg: "products routes"});
}



module.exports = {getAllProductsStatic, getAllProducts};