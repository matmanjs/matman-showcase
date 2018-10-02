import React, { Component } from 'react';

import RoomCard from '../room-card';

import './index.less';

export default class DisplayRecommendTwo extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { title, list, enter } = this.props;

        return (
            <section className="display-recommend-two">
                {
                    title ? (
                        <div className="title">{title}</div>
                    ) : null
                }

                <div className="list">
                    {
                        list.map((item, index) => {
                            return (
                                <RoomCard
                                    key={item.roomId}
                                    index={index}
                                    data={item}
                                    enter={enter}
                                />
                            );
                        })
                    }
                </div>
            </section>
        );
    }
}

DisplayRecommendTwo.defaultProps = {
    title: ''
};