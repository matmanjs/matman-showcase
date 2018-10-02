/**
 * 获得金钱的展示
 *
 * @param {Number} money 金额，单位为分
 * @return {string}
 */
export function getMoneyShow(money) {
    // 换算单位为元
    let result = money / 100;

    // 保留两位小数点
    result = money % 100 ?
        (money % 10 ? result : result + '0')
        : result + '.00';

    return result;
}