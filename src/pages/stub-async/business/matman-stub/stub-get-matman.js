import sinon from 'sinon';
import jsbridgeUtil from '../jsbridge-util';

export const ROUTE = '/stub/a/b/stub_get_matman';

export default class StubGetMatman {
    constructor(asyncClient) {
        this.asyncClient = asyncClient;
    }

    init() {
        let sendRequestClone = jsbridgeUtil.sendRequest;
        console.log('sendRequestClone', sendRequestClone);
        console.log('jsbridgeUtil', jsbridgeUtil);

        window.mytest1 = jsbridgeUtil;

        sinon.stub(jsbridgeUtil, 'sendRequest').callsFake((params, callback) => {
            console.log('======准备执行打桩数据=======');

            // 有问题时直接执行真实的fetch方法
            if (!this.asyncClient) {
                return sendRequestClone(params, callback);
            }

            // 如果远程服务未启动也需要放弃stub
            if (!this.asyncClient.isConnected()) {
                alert(`matman stub 服务未启动！请检查 ${this.asyncClient.getURI()} 是否已启动`);
                return sendRequestClone(params, callback);
            }

            this.asyncClient.emit(ROUTE, params, function (data) {
                if (process.env.NODE_ENV !== 'production') {
                    console.log('----client.callStub---', ROUTE, params, data);
                }

                // 如果stub服务端设置了禁用stub，则执行真实的fetch方法
                if (data._disable) {
                    return sendRequestClone(params, callback);
                }

                callback(Object.assign({ retcode: 0 }, data));
            });
        });

        window.mytest2 = jsbridgeUtil.sendRequest;
        window.mytest3 = jsbridgeUtil;
    }
}
