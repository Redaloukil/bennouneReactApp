import { combineReducers } from 'redux';
import user from './app/reducer/user';

const rootReducer = combineReducers(
    user,
)

export default rootReducer;