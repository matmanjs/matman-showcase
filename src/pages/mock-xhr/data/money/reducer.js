import { MONEY_INFO_REQUEST, MONEY_INFO_REQUEST_FAIL, MONEY_INFO_REQUEST_SUCCESS } from './action';

/**
 * @type {Object}
 */
const initialState = {
    isLoaded: false,
    money: 0
};

export default function moneyInfo(state = initialState, action) {
    let { type, data } = action,
        update = {};

    switch (type) {

        case MONEY_INFO_REQUEST:
            break;

        case MONEY_INFO_REQUEST_SUCCESS:
            update = {
                money: data.result.money,
                isLoaded: true
            };

            break;

        case MONEY_INFO_REQUEST_FAIL:
            update = {
                isLoaded: true
            };

            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}
