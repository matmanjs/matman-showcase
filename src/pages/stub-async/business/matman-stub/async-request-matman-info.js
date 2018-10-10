import sinon from 'sinon';
import jsbridgeUtil from '../jsbridge-util';

export default class AsyncRequestMatmanInfo {
    constructor(asyncClient) {
        this.asyncClient = asyncClient;
        this.route = '/async/a/b/async_request_matman_info';
    }

    init() {
        let sendRequestClone = jsbridgeUtil.sendRequest;

        sinon.stub(jsbridgeUtil, 'sendRequest').callsFake((params, callback) => {
            this.asyncClient.request(this.route, params)
                .then((data) => {
                    // 获取到桩数据之后，可以自行处理再返回
                    callback(Object.assign({ retcode: 0 }, data));
                })
                .catch((err) => {
                    // 若无法获取到桩数据，则使用原函数来获取
                    sendRequestClone(params, callback);
                });
        });
    }
}
