import React, { Component } from 'react';

import './index.less';

export default class HighorderRecievePush extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            msg: 'initial msg'
        };
    }

    render() {
        let { msg } = this.state;
        return (
            <div className="highorder-recieve-push">
                <div className="info">
                    <p>msg={msg}</p>
                </div>
            </div>
        );
    }
}
