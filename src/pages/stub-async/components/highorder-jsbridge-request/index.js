import React, { Component } from 'react';

import { request } from '../../business/jsbridge-request-controller';

import './index.less';

export default class HighorderJsbridgeRequest extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            name: 'initial name',
            desc: 'initial desc'
        };
    }

    handleEnter = () => {
        if (this.isLoading) {
            console.error('isLoading...');
            return;
        }

        this.isLoading = true;

        request({ name: 'matman' })
            .then((data) => {
                console.log('request() then', data);

                this.setState({
                    name: data.name,
                    desc: data.desc
                });

                this.isLoading = false;
            })
            .catch((err) => {
                console.error('request() catch err', err);

                this.isLoading = false;
            });
    };

    render() {
        let { name, desc } = this.state;
        return (
            <div className="highorder-jsbridge-request">
                <div className="info">
                    <p>name={name}</p>
                    <p>desc={desc}</p>
                </div>

                <div className="btn" onClick={this.handleEnter}>发送请求</div>
            </div>
        );
    }
}
