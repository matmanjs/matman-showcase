import React, { Component } from 'react';

import './index.less';

export default class DisplayRoomCard extends Component {
    handleClick = () => {
        const { index, data, enter } = this.props;
        if (typeof enter === 'function') {
            enter(data, index);
        }
    };

    render() {
        const { data } = this.props;
        const { pic, anchorName, online } = data;

        return (
            <div className="r2-room-card" onClick={this.handleClick}>
                <div className="box">
                    <div className='img' style={{ backgroundImage: 'url(' + pic + ')' }} />
                    <div className="info">
                        <div className="one">
                            <div className="name">{anchorName}</div>
                        </div>
                        <div className="two">
                            <div className="online"><i>{online}</i>人在看</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

DisplayRoomCard.defaultProps = {
    data: {},
    index: -1,
    enter: (data, index) => {
    }
};