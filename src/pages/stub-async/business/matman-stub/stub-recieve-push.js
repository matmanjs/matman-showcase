import matmanStubAsync from 'matman-stub-async';

export default class StubRecievePush {
  constructor(asyncClient) {
    this.asyncClient = asyncClient;
    this.route = '/stub/a/b/stub_recieve_push';
  }

  init() {
    matmanStubAsync.util.receive(this.asyncClient, this.route, (data) => {
      console.log('===recieve=====', data);
      window.gReceiveRemotePush(data);
    });

    // setTimeout(() => {
    //   console.log('-------3000------');
    //   this.asyncClient.emit(this.route, 'helllo,world');
    // }, 3000);
  }
}
