import { CALL_API } from '../../../../middlewares/api';

export const BANNER_INFO_REQUEST = 'BANNER_INFO_REQUEST';
export const BANNER_INFO_REQUEST_SUCCESS = 'BANNER_INFO_REQUEST_SUCCESS';
export const BANNER_INFO_REQUEST_FAIL = 'BANNER_INFO_REQUEST_FAIL';

export const BANNER_TYPE = {
    ANCHOR: 1,
    URL: 2
};

/**
 * linkstar 地址： xxx
 */
function fetchBannerInfo() {
    return {
        [CALL_API]: {
            types: [BANNER_INFO_REQUEST, BANNER_INFO_REQUEST_SUCCESS, BANNER_INFO_REQUEST_FAIL],
            url: 'http://now.qq.com/cgi-bin/a/b/get_banner',
            type: 'get'
        }
    };
}

export function loadBannerInfo() {
    return (dispatch, getState) => {
        return dispatch(fetchBannerInfo());
    };
}