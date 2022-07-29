const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * from StoreManager.sales';
  const [sales] = await connection.execute(query);
  return sales;
}

const getById = async (id) => {
  const query = 'SELECT * from StoreManager.sales where id=?';
  const [sale] = await connection.execute(query, [id]);
  return sale;
}

module.exports = { getAll, getById };
