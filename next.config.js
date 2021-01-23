const path = require('path');
const webpack = require('webpack');

module.exports = {
  webpack: config => {
    config.resolve.alias['~'] = path.resolve(__dirname);
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx'];
    return config;
  },
};
