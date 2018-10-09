import matmanStubAsync from 'matman-stub-async';

export default class StubRecievePush {
    constructor(asyncClient) {
        this.asyncClient = asyncClient;
        this.route = '/stub/a/b/stub_recieve_push';
    }

    init() {
        matmanStubAsync.util.recieve(this.asyncClient, this.route)
            .then((data) => {
                window.gReceiveRemotePush(data);
            })
            .catch((err) => {
                console.error('matmanStubAsync.util.recieve err', err);
            });
    }
}
