const express = require('express');
const ProductsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/products', ProductsController.getAllProducts);
router.get('/products/:id', ProductsController.getProductsById);

module.exports = router;
