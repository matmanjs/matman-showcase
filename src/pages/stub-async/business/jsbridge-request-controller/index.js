import { sendRequest } from '../jsbridge-util';

export function request(params = {}) {
    return new Promise((resolve, reject) => {
        sendRequest(params, (data) => {
            if (data.retcode === 0) {
                resolve(data);
            } else {
                reject(data);
            }
        });
    });
}

