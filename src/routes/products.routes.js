const express = require('express');
const ProductsController = require('../controllers/products.controller');
const { verifyName, verifyQuantity } = require('../middlewares/product.middleware');

const router = express.Router();

router.get('/products', ProductsController.getAllProducts);
router.get('/products/:id', ProductsController.getProductsById);
router.post('/products', verifyName, verifyQuantity, ProductsController.createProduct);

module.exports = router;
