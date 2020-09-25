import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_FAIL,
    REGISTER_SUCCESS,
    ADMIN_LOADING,
    ADMIN_LOADED,
    ADMIN_LOGIN_SUCCESS,
    ADMIN_REGISTER_SUCCESS,
    ADMIN_AUTH_ERROR,
    ADMIN_LOGIN_FAIL,
    ADMIN_LOGOUT_SUCCESS,
    ADMIN_REGISTER_FAIL
}from '../actions/types';
import { bindActionCreators } from 'redux';

const initialState ={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    isAuthAdmin:null,
    isLoading:false,
    user:null
}

export default function(state=initialState,action){
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading:true
            };
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated:true,
                isLoading:false,
                user:action.payload
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
        localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthenticated:true,
                isLoading:false
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
            localStorage.removeItem('token');
        return {
            ...state,
            token :null,
            user:null,
            isAuthenticated:false,
            isLoading:false
        };
        


        // Admin Reducers

        case ADMIN_LOADING:
            return {
                ...state,
                isLoading:true
            };
        case ADMIN_LOADED:
            return {
                ...state,
                isAuthAdmin:true,
                isLoading:false,
                admin:action.payload
            };
        case ADMIN_LOGIN_SUCCESS:
        case ADMIN_REGISTER_SUCCESS:
        localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthAdmin:true,
                isLoading:false
            };
        case ADMIN_AUTH_ERROR:
        case ADMIN_LOGIN_FAIL:
        case ADMIN_LOGOUT_SUCCESS:
        case ADMIN_REGISTER_FAIL:
            localStorage.removeItem('token');
        return {
            ...state,
            token :null,
            admin:null,
            isAuthAdmin:false,
            isLoading:false
        };
        default:
            return state;
        
    }
}