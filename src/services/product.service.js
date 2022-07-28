const ProductModels = require('../models/products.model');
const utilsError = require('../utils/index');

const getAllProducts = async () => {
  const getAllProducts = await ProductModels.getAllProducts();
  return getAllProducts;
};

const getProductsById = async (id) => {
  const getAllProducts = await ProductModels.getProductsById(id);
  if(getAllProducts.length === 0) return utilsError(404, 'Product not found');
  return getAllProducts;
};

module.exports = { getAllProducts, getProductsById };
