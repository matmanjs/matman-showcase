import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadMoneyInfo } from '../../data/money';
import { clickBanner } from '../../business/banner-controller';

import './index.less';

class HighorderMoney extends Component {
    componentDidMount() {
        this.props.loadMoneyInfo();
    }

    handleEnter = () => {
        clickBanner(this.props.data);
    };

    render() {
        const { isLoaded, money } = this.props;

        if (!isLoaded) {
            return null;
        }

        return (
            <div className="highorder-money">
                {money}
                {/*<div className="pic" style={{ backgroundImage: `url(${data.pic})` }} onClick={this.handleEnter} />*/}
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