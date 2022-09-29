import { combineReducers } from 'redux';

import genreSelector from './genreSelector';
import authReducer from './auth';

export default combineReducers({ genreSelector, authReducer });