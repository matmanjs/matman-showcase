import sinon from 'sinon';
import jsbridgeUtil from '../jsbridge-util';

export default class StubGetMatman {
  constructor(asyncClient) {
    this.asyncClient = asyncClient;
    this.route = '/stub/a/b/stub_get_matman';
  }

  init() {
    let sendRequestClone = jsbridgeUtil.sendRequest;

    sinon.stub(jsbridgeUtil, 'sendRequest').callsFake((params, callback) => {
      console.log('======准备执行打桩数据 jsbridgeUtil.sendRequest=======');

      this.asyncClient.request(this.route, params)
        .then((data) => {
          callback(Object.assign({ retcode: 0 }, data));
        })
        .catch((err) => {
          sendRequestClone(params, callback);
        });
    });
  }
}
