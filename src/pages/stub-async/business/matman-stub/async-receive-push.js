export default class AsyncReceivePush {
    constructor(asyncClient) {
        this.asyncClient = asyncClient;
        this.route = '/async/a/b/async_receive_push';
    }

    init() {
        this.asyncClient.listen(this.route, (data) => {
            window.gReceiveRemotePush(data);
        });
    }
}
