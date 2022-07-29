const SalesService = require('../services/sales.service');

const getAll = async (req, res) => {
  try {
    const sales = await SalesService.getAll();
    return res.status(200).json(sales)
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const sales = await SalesService.getById(id);
    return res.status(200).json(sales)
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = { getAll, getById };
