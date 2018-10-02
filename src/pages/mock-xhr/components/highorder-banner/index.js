import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisplayBanner from './display-banner';

import { loadBannerInfo } from '../../data/banner';
import { clickBanner } from '../../business/banner-controller';

import './index.less';

class HighorderBanner extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.loadBannerInfo();
    }

    handleEnter = () => {
        clickBanner(this.props.data);
    };

    render() {
        const { isLoaded, data } = this.props;

        return (
            <div className="highorder-banner">
                <DisplayBanner isLoaded={isLoaded} data={data} enter={this.handleEnter} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { bannerInfo } = state;

    return {
        isLoaded: bannerInfo.isLoaded,
        data: bannerInfo.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadBannerInfo() {
            return dispatch(loadBannerInfo());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HighorderBanner);