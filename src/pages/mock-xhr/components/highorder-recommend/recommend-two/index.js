import React from 'react';

import RoomCard from '../room-card';
import Empty from '../empty';

import './index.less';

export default function DisplayRecommendTwo(props) {
    const { title, list, enter } = props;

    return (
        <section className="display-recommend-two">
            {
                title ? (
                    <div className="title">{title}</div>
                ) : null
            }

            {
                list.length ? (
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
                ) : <Empty />
            }

        </section>
    );
}