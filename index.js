const express = require('express');
const bodyParser = require('body-parser');

const routerProducts = require('./src/routes/products.routes');

const app = express();

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());

app.use(routerProducts);

app.listen(PORT, () => {
  console.log(`Servidor iniciado na porta ${PORT}`)
});
