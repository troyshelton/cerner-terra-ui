/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge');

const WebpackConfigTerra = require('./packages/webpack-config-terra/lib/webpack.config');

const coreConfig = (env = {}) => ({
  plugins: [],
});

const mergedConfig = (env, argv) => (
  merge(WebpackConfigTerra(env, argv))
);

console.log("hi!!!!");
console.log(WebpackConfigTerra);
module.exports = mergedConfig;
