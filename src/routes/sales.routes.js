const express = require('express');
const SalesController = require('../controllers/sales.controller');

const route = express.Router();

route.get('/sales' , SalesController.getAll);
route.get('/sales/:id' , SalesController.getById);

module.exports = route;
