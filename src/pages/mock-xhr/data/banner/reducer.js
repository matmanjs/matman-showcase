import { BANNER_INFO_REQUEST, BANNER_INFO_REQUEST_FAIL, BANNER_INFO_REQUEST_SUCCESS } from './action';

/**
 * @type {Object}
 */
const initialState = {
    isLoaded: false,
    data: {}
};

export default function bannerInfo(state = initialState, action) {
    let { type, data } = action,
        update = {};

    switch (type) {

        case BANNER_INFO_REQUEST:
            break;

        case BANNER_INFO_REQUEST_SUCCESS:
            update = {
                data: data,
                isLoaded: true
            };

            break;

        case BANNER_INFO_REQUEST_FAIL:
            update = {
                isLoaded: true
            };

            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}
