import {combineReducers} from 'redux';
import ItemReducer from './itemReducer';
import errorReducer from './errorReducer';
import authReducer from "./authReducer";
import messageReducer from './saveMessageReducer';
import eventReducer from './eventReducer'
import reservationReducer from './reservationReducer';
import ImageReucer from './ImageReducer';


export default combineReducers({
    item:ItemReducer,
    event:eventReducer,
    error:errorReducer,
    auth:authReducer,
    getMessage: messageReducer,
    reservation:reservationReducer,
    image:ImageReucer
})