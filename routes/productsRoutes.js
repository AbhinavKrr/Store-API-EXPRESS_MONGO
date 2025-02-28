const express = require('express');
productRouter = express.Router();
const {getAllProductsStatic, getAllProducts} = require("../controllers/productsController");


productRouter.route('/').get(getAllProducts);
productRouter.route('/static').get(getAllProductsStatic);


module.exports = productRouter;