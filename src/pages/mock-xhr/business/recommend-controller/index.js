import { openRoom } from '../major-controller';

/**
 * 打开房间
 * @param {Number} roomId 房间ID
 */
export function enterRoom(roomId) {
    openRoom(roomId);
}

/**
 * 获得在线人数的展示
 *
 * @param {Number} num 实际在线人数
 * @return {String}
 */
export function getOnlineShow(num) {
    if (num > 9999) {
        return (num / 10000).toFixed(1) + '万';
    } else if (num > 999) {
        let result = (num / 1000).toFixed(1);
        return result === '10.0' ? '1.0万' : result + '千';
    } else {
        return num + '';
    }
}