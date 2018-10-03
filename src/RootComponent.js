import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import MockXhr from './pages/mock-xhr';
import StubAsync from './pages/stub-async';

import './index.less';

const RootComponent = () => (
    <Router>
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/mock-xhr" component={MockXhr} />
            <Route path="/stub-async" component={StubAsync} />
        </div>
    </Router>
);

export default RootComponent;