import { openRoom } from '../major-controller';

/**
 * 打开房间
 * @param {Number} roomId 房间ID
 */
export function enterRoom(roomId){
    openRoom(roomId);
}

/**
 * 获得在线人数的展示
 *
 * @param {Number} num 实际在线人数
 * @return {string}
 */
export function getOnlineShow(num) {
    // 换算单位为元
    let result = num / 100;

    // 保留两位小数点
    result = num % 100 ?
        (num % 10 ? result : result + '0')
        : result + '.00';

    return result;
}