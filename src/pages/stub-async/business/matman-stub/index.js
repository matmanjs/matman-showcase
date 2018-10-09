import AsyncClient from './stub-async-client';

import StubGetMatman from './stub-get-matman';

// url 参数中必须有stub_ip=xxx，指定websocket服务器的地址
// export const STUB_IP = location.search
//     .match(new RegExp('(\\?|&)stub_ip=([^&]*)(&|$)'))
//     ? decodeURIComponent(RegExp.$2) : '';
// export const STUB_IP = '127.0.0.1:9527';
// export const STUB_IP = '10.66.67.146:9527';
// 可以使用代理的方式来代理到指定的端口上
export const STUB_IP = 'matmanjs.org';

export default function init() {
    if (!STUB_IP) {
        console.log('[matman-stub] no stub ip');
        return;
    }

    // 创建 stub 客户端对象
    // TODO 如果是用代理的方式在手机端调试，则必须使用 ip 的方式访问，不能够使用 localhost 和 127.0.0.1
    // const matmanStubClient = new MatmanStubClient('http://127.0.0.1:3000');
    // const matmanStubClient = new MatmanStubClient('http://10.66.95.54:3000');
    const asyncClient = new AsyncClient(`http://${STUB_IP}`);

    new StubGetMatman(asyncClient).init();
}