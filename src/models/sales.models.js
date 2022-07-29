const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * from StoreManager.sales';
  const [sales] = await connection.execute(query);
  return sales;
}
