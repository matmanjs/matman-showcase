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
        const { isLoaded, money, errmsg } = this.props;

        const moneyShow = getMoneyShow(money);

        const isShowMoney = isLoaded && !errmsg;
        const isShowErrMsg = isLoaded && errmsg;
        const isShowLoading = !isShowMoney && !isShowErrMsg;

        return (
            <div className="highorder-money">
                <div className="title">红包余额（元）</div>

                {
                    isShowMoney ? <div className="money">{moneyShow}</div> : null
                }

                {
                    isShowErrMsg ? <div className="errmsg">{errmsg}</div> : null
                }

                {
                    isShowLoading ? <div className="loading">加载中...</div> : null
                }

            </div>
        );
    }
}

function mapStateToProps(state) {
    const { moneyInfo } = state;

    return {
        isLoaded: moneyInfo.isLoaded,
        money: moneyInfo.money,
        errmsg: moneyInfo.errmsg

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