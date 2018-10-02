import React from 'react';

import './index.less';

export default function DisplayBanner(props) {
    const { isLoaded, data, enter } = props;

    if (!isLoaded) {
        return null;
    }

    return (
        <div className="display-banner" onClick={enter}>
            <div className="pic" style={{ backgroundImage: `url(${data.pic})` }} />
        </div>
    );
}