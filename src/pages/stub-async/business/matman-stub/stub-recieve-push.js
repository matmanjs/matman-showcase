export default class StubRecievePush {
  constructor(asyncClient) {
    this.asyncClient = asyncClient;
    this.route = '/stub/a/b/stub_recieve_push';
  }

  init() {
    this.asyncClient.listen(this.route, (data) => {
      console.log('===recieve=====', data);
      window.gReceiveRemotePush(data);
    });
  }
}
