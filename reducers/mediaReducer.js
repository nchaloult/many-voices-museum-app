import { MEDIA_TITLE_CHANGE } from '../constants';

const initialState = {
    mediaTitle: 'Nothing Playing',
};

const mediaTitleReducer = (state = initialState, action) => {
    switch(action.type) {
        case MEDIA_TITLE_CHANGE:
            return { ...state, mediaTitie: action.payload };
        default:
            return state;
    }
};

export default mediaTitleReducer;