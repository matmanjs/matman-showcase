import React from 'react';
import { HashRouter as Router, NavLink, Route } from 'react-router-dom';

import Home from './pages/home';
import MockXhr from './pages/mock-xhr';

const RootComponent = () => (
    <Router>
        <div>
            <ul className="top-menu">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/mock-xhr" activeClassName="active">基于XHR的数据模拟</NavLink></li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/mock-xhr" component={MockXhr} />
        </div>
    </Router>
);

export default RootComponent;