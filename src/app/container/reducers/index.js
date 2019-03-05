import { combineReducers } from 'redux';
import UsersReducer from './user'
import AppReducer from './user'
import AuthReducer from './auth';

export const reducers = combineReducers({
    app: AppReducer,
    auth: AuthReducer,
    user: UsersReducer
})

