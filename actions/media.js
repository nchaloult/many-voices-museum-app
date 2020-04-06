import { MEDIA_TITLE_CHANGE } from '../constants';

function changeMediaTitle(title) {
    return {
        type: MEDIA_TITLE_CHANGE,
        payload: title,
    };
}

const actionCreators = {
    changeMediaTitle,
};

export { actionCreators };