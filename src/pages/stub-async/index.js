import React, { Component } from 'react';

import matmanStub from './business/matman-stub';

import JsbridgeRequest from './components/highorder-jsbridge-request';

import './index.less';

export default class StubAsync extends Component {
    constructor(props, context) {
        super(props, context);

        matmanStub();
    }

    render() {
        return (
            <div className="page-stub-async">
                <h1>stub async</h1>
                <JsbridgeRequest />
            </div>
        );
    }
}