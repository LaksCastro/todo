import { combineReducers } from 'redux';

import todo from './todo';
import user from './user';
import toast from './toast';

export default combineReducers({
    todo,
    user,
    toast
});