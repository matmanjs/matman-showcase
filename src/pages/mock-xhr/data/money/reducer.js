import { MONEY_INFO_REQUEST, MONEY_INFO_REQUEST_FAIL, MONEY_INFO_REQUEST_SUCCESS } from './action';

/**
 * @type {Object}
 */
const initialState = {
    isLoaded: false,
    money: 0,
    retcode: 0,
    errmsg: ''
};

export default function moneyInfo(state = initialState, action) {
    let { type, data, error } = action,
        update = {};

    switch (type) {

        case MONEY_INFO_REQUEST:
            break;

        case MONEY_INFO_REQUEST_SUCCESS:
            update = {
                retcode: 0,
                money: data.money,
                isLoaded: true
            };

            break;

        case MONEY_INFO_REQUEST_FAIL:
            update = {
                retcode: error.retcode,
                errmsg: (error.errmsg || '内部异常，请稍后再试') + `(${error.retcode})`,
                isLoaded: true
            };

            break;

        default:
            break;
    }

    return Object.keys(update).length ? Object.assign({}, state, update) : state;
}
