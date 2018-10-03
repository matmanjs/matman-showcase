import React from 'react';

import Banner from './components/highorder-banner';
import Money from './components/highorder-money';
import Recommend from './components/highorder-recommend';

import './index.less';

export default function MockXhr() {
    return (
        <div className="page-mock-xhr">
            <Banner />
            <Money />
            <Recommend />
        </div>
    );
}
