const express = require('express');
productRouter = express.Router();
const {getAllProductsStatic, getAllProducts, createProduct} = require("../controllers/productsController");


productRouter.route('/').get(getAllProducts);
productRouter.route('/static').get(getAllProductsStatic);
productRouter.route('/').post(createProduct);


module.exports = productRouter;