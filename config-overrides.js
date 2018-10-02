const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    config = injectBabelPlugin(['@babel/plugin-proposal-export-default-from'], config);

    config = rewireLess(config, env);

    return config;
};