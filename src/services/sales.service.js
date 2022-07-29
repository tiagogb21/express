const SalesModel = require('../models/products.model');

const getAll = async () => {
  const sales = await SalesModel.getAll();
  return sales;
}

module.exports = { getAll };
