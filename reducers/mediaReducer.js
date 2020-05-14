import { MEDIA_TITLE_CHANGE, MEDIA_PLAYPAUSE } from '../constants';

const initialState = {
  playing: false,
  paused: true,
  mediaTitle: 'Nothing Playing',
};

const mediaTitleReducer = (state = initialState, action) => {
  switch (action.type) {
    case MEDIA_TITLE_CHANGE:
      return {
        playing: true,
        mediaTitle: action.payload,
      };
    case MEDIA_PLAYPAUSE:
      return {
        ...state,
        paused: !state.paused,
      };
    default:
      return state;
  }
};

export default mediaTitleReducer;
