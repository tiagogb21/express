const ProductModels = require('../models/products.model');

const getAllProducts = async () => {
  const getAllProducts = await ProductModels.getAllProducts();
  return getAllProducts;
};

const getProductsById = async (id) => {
  const getAllProducts = await ProductModels.getProductsById(id);
  return getAllProducts;
};

module.exports = { getAllProducts, getProductsById };
