const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {

    console.log('============',config)

    config = rewireLess(config, env);

    return config;
};