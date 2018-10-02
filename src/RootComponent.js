import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home';
import MockXhr from './pages/mock-xhr';

const RootComponent = () => (
    <Router>
        <div className="container">
            <Route exact path="/" component={Home} />
            <Route path="/mock-xhr" component={MockXhr} />
        </div>
    </Router>
);

export default RootComponent;