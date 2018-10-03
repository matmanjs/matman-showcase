// import StubAsyncClient from '../matman-stub/stub-async-client';

export function sendRequest(params, callback) {
    // // 模拟异步返回
    setTimeout(() => {
        callback(Object.assign({ retcode: 0 }, params));
    }, 100);

    // let host = 'localhost:9527';
    // let actualURL = '/stub/a/b/stub_get_matman';
    // let query;
    //
    // new StubAsyncClient(`http://${host}`).emit(actualURL, params, (data) => {
    //     if (process.env.NODE_ENV !== 'production') {
    //         console.log(`url=${actualURL}`, query, data);
    //     }
    //
    //     callback(Object.assign({ retcode: 0 }, data));
    // });
}

export default {
    sendRequest
};