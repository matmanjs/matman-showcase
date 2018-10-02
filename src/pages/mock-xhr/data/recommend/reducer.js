import { RECOMMEND_INFO_REQUEST, RECOMMEND_INFO_REQUEST_FAIL, RECOMMEND_INFO_REQUEST_SUCCESS } from './action';

/**
 * @type {Object}
 */
const initialState = {
    isLoaded: false,
    list: []
};

export default function recommendInfo(state = initialState, action) {
    let { type, data } = action,
        update = {};

    switch (type) {

        case RECOMMEND_INFO_REQUEST:
            break;

        case RECOMMEND_INFO_REQUEST_SUCCESS:
            update = {
                list: data.list,
                isLoaded: true
            };

            break;

        case RECOMMEND_INFO_REQUEST_FAIL:
            update = {
                isLoaded: true
            };

            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}
