import { BANNER_TYPE } from '../../data/banner';
import { openRoom, openURL } from '../major-controller';

export function clickBanner(data) {
    if (!data || !data.type) {
        console.error('undefined banner type!');
        return;
    }

    switch (data.type) {
        case BANNER_TYPE.ANCHOR:
            openRoom(data.roomId);
            break;

        case BANNER_TYPE.URL:
            openURL(data.jumpUrl);
            break;

        default:
            break;
    }
}

