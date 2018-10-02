import { CALL_API } from '../../../../middlewares/api';

export const MONEY_INFO_REQUEST = 'MONEY_INFO_REQUEST';
export const MONEY_INFO_REQUEST_SUCCESS = 'MONEY_INFO_REQUEST_SUCCESS';
export const MONEY_INFO_REQUEST_FAIL = 'MONEY_INFO_REQUEST_FAIL';

/**
 * linkstar 地址： xxx
 */
function fetchMoneyInfo() {
    return {
        [CALL_API]: {
            types: [MONEY_INFO_REQUEST, MONEY_INFO_REQUEST_SUCCESS, MONEY_INFO_REQUEST_FAIL],
            url: 'http://now.qq.com/cgi-bin/a/b/get_money',
            type: 'get'
        }
    };
}

export function loadMoneyInfo() {
    return (dispatch, getState) => {
        return dispatch(fetchMoneyInfo());
    };
}