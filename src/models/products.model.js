const connection = require('./connection');

const getAllProducts = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(query);
  return products;
}

const getProductsById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products where id = ?';
  const [product] = await connection.execute(query, [id]);
  return product;
}

module.exports = { getAllProducts, getProductsById }
