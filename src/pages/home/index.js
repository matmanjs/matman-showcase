import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.less';

export default function Home() {
    return (
        <div className="page-home">
            <h1>matman 演示项目</h1>
            <p>这是 <a href="https://github.com/matmanjs/matman" target="_blank"
                     rel="noopener noreferrer">matman</a> 的演示项目，我们构造了几个典型场景，用于展示
                matman 强大的数据模拟功能，以及如何便捷的进行 web 前端自动化测试的。如果您有更好的建议或者遇到一些问题，欢迎给我们提 <a
                    href="https://github.com/matmanjs/matman/issues" target="_blank"
                    rel="noopener noreferrer">Issues</a>！</p>

            <h2>1. 示例说明</h2>
            <h3>1.1 XHR的数据模拟</h3>
            <p>页面地址：<NavLink to="/mock-xhr" activeClassName="active">/mock-xhr</NavLink> 。</p>
            <p>该页面展示的是典型的前端 h5 项目，为避免复杂，我们选取了几个典型的场景进行演示。</p>

            <h3>1.2 异步数据模拟</h3>
            <p>页面地址：<NavLink to="/stub-async" activeClassName="active">/stub-async</NavLink> 。</p>
            <p>该页面展示的是典型的前端 h5 项目，涉及几条 CGI</p>
        </div>
    );
}