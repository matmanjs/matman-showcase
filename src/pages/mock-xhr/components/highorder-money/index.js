import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadMoneyInfo } from '../../data/money';
import { getMoneyShow } from '../../business/money-controller';

import './index.less';

class HighorderMoney extends Component {
    componentDidMount() {
        this.props.loadMoneyInfo();
    }

    render() {
        const { isLoaded, money } = this.props;

        const moneyShow = getMoneyShow(money);

        return (
            <div className="highorder-money">
                <div className="title">红包余额（元）</div>

                {
                    isLoaded ? <div className="money">{moneyShow}</div> : <div className="loading">加载中...</div>
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { moneyInfo } = state;

    return {
        isLoaded: moneyInfo.isLoaded,
        money: moneyInfo.money
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadMoneyInfo() {
            return dispatch(loadMoneyInfo());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HighorderMoney);