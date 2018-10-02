import React from 'react';
import { HashRouter as Router, NavLink, Route } from 'react-router-dom';

import Home from './pages/home';
import Demo01 from './pages/demo01';



const RootComponent = () => (
    <Router>
        <div>
            <ul className="top-menu">
                <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                <li><NavLink to="/demo01" activeClassName="active">demo01</NavLink></li>
            </ul>

            <Route exact path="/" component={Home} />
            <Route path="/demo01" component={Demo01} />
        </div>
    </Router>
);

export default RootComponent;