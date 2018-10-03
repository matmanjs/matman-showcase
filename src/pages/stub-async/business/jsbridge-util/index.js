export function sendRequest(params, callback) {
    // 模拟异步返回
    setTimeout(() => {
        callback(Object.assign({ retcode: 0 }, params));
    }, 100);
}