const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  VUE_APP_API_URL: '"VUE_APP_API_URL"',
});