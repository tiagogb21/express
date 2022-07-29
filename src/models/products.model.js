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

const createProduct = async (name, quantity) => {
  const allProducts = await getAllProducts();
  const findProduct = allProducts.find((product) => product.name === name);
  console.log(findProduct)
  if(findProduct) return;
  const query = 'INSERT INTO StoreManager.products (name, quantity) VALUES (?, ?)';
  const newProduct = await connection.execute(query, [name, quantity]);
  return newProduct;
}

const updateProduct = async (name, quantity, id) => {
  const query = 'UPDATE StoreManager.products SET name=? quantity=? WHERE id=?';
  const updateProduct = await connection.execute(query, [name, quantity, id]);
  return updateProduct;
}

module.exports = { getAllProducts, getProductsById, createProduct, updateProduct }
