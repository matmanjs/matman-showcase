import { CALL_API } from '../../../../middlewares/api';

export const RECOMMEND_INFO_REQUEST = 'RECOMMEND_INFO_REQUEST';
export const RECOMMEND_INFO_REQUEST_SUCCESS = 'RECOMMEND_INFO_REQUEST_SUCCESS';
export const RECOMMEND_INFO_REQUEST_FAIL = 'RECOMMEND_INFO_REQUEST_FAIL';

/**
 * linkstar 地址： xxx
 */
function fetchRecommendInfo() {
    return {
        [CALL_API]: {
            types: [RECOMMEND_INFO_REQUEST, RECOMMEND_INFO_REQUEST_SUCCESS, RECOMMEND_INFO_REQUEST_FAIL],
            url: 'http://now.qq.com/cgi-bin/a/b/get_recommend',
            type: 'get'
        }
    };
}

export function loadRecommendInfo() {
    return (dispatch, getState) => {
        return dispatch(fetchRecommendInfo());
    };
}