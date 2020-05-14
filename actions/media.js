import { MEDIA_TITLE_CHANGE, MEDIA_PLAYPAUSE } from '../constants';

function changeMediaTitle(title) {
  return {
    type: MEDIA_TITLE_CHANGE,
    payload: title,
  };
}

function playpause() {
  return {
    type: MEDIA_PLAYPAUSE,
  };
}

const actionCreators = {
  changeMediaTitle,
  playpause,
};

export { actionCreators };
