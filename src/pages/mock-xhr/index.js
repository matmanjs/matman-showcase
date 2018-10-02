import React, { Component } from 'react';

import Banner from './components/highorder-banner';
import Money from './components/highorder-money';
import Recommend from './components/highorder-recommend';

import './index.less';

export default class MockXhr extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="page-mock-xhr">
                <Banner />
                <Money />
                <Recommend />
            </div>
        );
    }
}