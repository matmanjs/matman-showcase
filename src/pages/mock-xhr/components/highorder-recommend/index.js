import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisplayRecommendTwo from './recommend-two';

import { loadRecommendInfo } from '../../data/recommend';

class HighorderRecommend extends Component {

    componentDidMount() {
        this.props.loadRecommendInfo(4);
    }

    handleEnter = () => {

    };

    render() {
        // 如果没有加载完成，则不渲染
        const { isLoaded, list } = this.props;
        if (!isLoaded) {
            return null;
        }

        return (
            <DisplayRecommendTwo
                title="大家都在看"
                list={list}
                enter={this.handleEnter}
            />
        );
    }
}

function mapStateToProps(state) {
    const { recommendInfo } = state;

    return {
        list: recommendInfo.list,
        isLoaded: recommendInfo.isLoaded
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadRecommendInfo(num) {
            return dispatch(loadRecommendInfo(num));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HighorderRecommend);
