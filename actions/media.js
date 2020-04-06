import { MEDIA_TITLE_CHANGE } from '../constants';

export function changeMediaTitle(title) {
    return {
        type: MEDIA_TITLE_CHANGE,
        payload: title,
    };
}