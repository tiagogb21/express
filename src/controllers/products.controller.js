const ProductsService = require('../services/product.service');

const getAllProducts = async (req, res) => {
  try {
    const products = await ProductsService.getAllProducts();
    return res.status(200).json(products);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const getProductsById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await ProductsService.getProductsById(id);
    return res.status(200).json(product);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const newProduct = await ProductsService.createProduct(name, quantity);
    return newProduct;
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = { getAllProducts, getProductsById, createProduct };
