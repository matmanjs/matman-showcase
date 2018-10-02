const { getFail } = require('../../base');

module.exports = function () {
    return getFail(100001, '后台内部错误');
};