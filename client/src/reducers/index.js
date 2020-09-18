import {combineReducers} from 'redux';
import ItemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from "./authReducer";
import messageReducer from './saveMessageReducer'


export default combineReducers({
    item:ItemReducer,
    error:errorReducer,
    auth:authReducer,
    getMessage: messageReducer
})