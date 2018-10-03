function sendRequest(params, callback) {
    // // 模拟异步返回
    setTimeout(() => {
        callback(Object.assign({ retcode: 0 }, params));
    }, 100);
}

// 目前发现必须得这么做，否则 sinon.stub 会无法生效
export default {
    sendRequest
};