import React, { Component } from 'react';

import Banner from './components/highorder-banner';

import './index.less';

export default class MockXhr extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="page-mock-xhr">
                <Banner />
            </div>
        );
    }
}