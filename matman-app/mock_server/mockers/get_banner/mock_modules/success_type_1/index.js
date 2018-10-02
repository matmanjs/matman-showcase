const { getSuccess } = require('../../base');

module.exports = function (params) {
    return getSuccess({
        type: 1,
        name: '千金',
        anchorId: 12345678,
        roomId: 10086,
        pic: 'https://qpic.url.cn/feeds_pic/Q3auHgzwzM6ZP8W3DAVIgpfxv6npQ9pQjOXDa7wiaN8AADoIrLT0HXg/'
    });
};