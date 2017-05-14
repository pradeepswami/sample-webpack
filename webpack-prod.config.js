var devConfig = require('./webpack.config.js');

// additional loader

devConfig.watch = false;
module.exports = devConfig;