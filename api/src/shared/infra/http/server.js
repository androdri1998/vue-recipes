require('dotenv').config({
  path: '.env',
});
require('express-async-errors');

const cors = require('cors');
const express = require('express');

const appConfig = require('../../../config/app');
const errorsMiddleware = require('./middlewares/errors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use(errorsMiddleware);

app.listen(appConfig.port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on port ${appConfig.port}!`);
});
