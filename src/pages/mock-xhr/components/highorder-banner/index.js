import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadBannerInfo } from '../../data/banner';
import { clickBanner } from '../../business/banner-controller';

import './index.less';

class HighorderBanner extends Component {
    componentDidMount() {
        this.props.loadBannerInfo();
    }

    handleEnter = () => {
        clickBanner(this.props.data);
    };

    render() {
        const { isLoaded, data } = this.props;

        if (!isLoaded) {
            return null;
        }

        return (
            <div className="highorder-banner">
                <div className="pic" style={{ backgroundImage: `url(${data.pic})` }} onClick={this.handleEnter} />
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