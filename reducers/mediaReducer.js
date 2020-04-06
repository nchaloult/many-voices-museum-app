import { MEDIA_TITLE_CHANGE } from '../constants';

const initialState = {
    playing: false,
    mediaTitle: 'Nothing Playing',
};

const mediaTitleReducer = (state = initialState, action) => {
    switch(action.type) {
        case MEDIA_TITLE_CHANGE:
            return {
                playing: true,
                mediaTitle: action.payload,
            };
        default:
            return state;
    }
};

export default mediaTitleReducer;