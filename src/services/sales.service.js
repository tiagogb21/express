const SalesModel = require('../models/sales.models');
const utilsError = require('../utils/index');

const getAll = async () => {
  const sales = await SalesModel.getAll();
  return sales;
}

const getById = async (id) => {
  const sales = await SalesModel.getById(id);
  if(sales.length === 0) return utilsError(404, 'Product not found');
  return sales;
}

module.exports = { getAll, getById };
