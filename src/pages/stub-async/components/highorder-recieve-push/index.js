import React, { Component } from 'react';

import './index.less';

export default class HighorderRecievePush extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            msg: 'initial msg'
        };
    }

    componentDidMount() {
        // 被动接受后台 push 的方法
        window.gReceiveRemotePush = (response) => {
            console.log('=== window.gReceiveRemotePush ===', response);

            this.setState({
                msg: typeof response === 'string' ? response : JSON.stringify(response)
            });
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
