import { createStore, combineReducers } from 'redux';

import mediaTitleReducer from '../reducers/mediaReducer';

const rootReducer = combineReducers({ media: mediaTitleReducer });

const configureStore = () => createStore(rootReducer);

export default configureStore;