import React from 'react';

import JsbridgeRequest from './components/highorder-jsbridge-request'

import './index.less';

export default function StubAsync() {
    return (
        <div className="page-stub-async">
            <h1>stub async</h1>
            <JsbridgeRequest/>
        </div>
    );
}
