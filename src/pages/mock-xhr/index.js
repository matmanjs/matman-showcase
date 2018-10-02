import React, { Component } from 'react';

import './index.less';

export default class MockXhr extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="page-mock-xhr">
                <h2>demo01</h2>
            </div>
        );
    }
}