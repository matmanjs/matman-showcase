import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadBannerInfo } from '../../data/banner';

import './index.less';

class HighorderBanner extends Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
        this.props.loadBannerInfo();
    }

    handleEnter = () => {

    };

    render() {
        const { isLoaded, bannerInfo } = this.props;

        // 计算wording文案
        // 如果正在下载中，则展示下载进度
        // 否则通过活动配置信息与房间的信息获得当前的wording

        return (
            <div className="highorder-banner">
                {JSON.stringify(bannerInfo, null, 2)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { bannerInfo } = state;

    return {
        isLoaded: bannerInfo.isLoaded,
        bannerInfo: bannerInfo
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