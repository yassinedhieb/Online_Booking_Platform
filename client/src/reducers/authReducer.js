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
    ADMIN_REGISTER_FAIL,
    HOST_LOADING,
    HOST_LOADED,
    HOST_LOGIN_SUCCESS,
    HOST_REGISTER_SUCCESS,
    HOST_AUTH_ERROR,
    HOST_LOGIN_FAIL,
    HOST_LOGOUT_SUCCESS,
    HOST_REGISTER_FAIL
}from '../actions/types';
import { bindActionCreators } from 'redux';

const initialState ={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    isAuthAdmin:null,
    isAuthHost:null,
    isLoading:false,
    role:null,
    
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
            isAuthHost:false,
            role:null,
            isLoading:false,
            isAuthAdmin:false
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
                isLoading:false,
                isAuthenticated:true
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
            isLoading:false,
            role:null
        };

        //Host reducers
        case HOST_LOADING:
            return {
                ...state,
                isLoading:true
            };
        case HOST_LOADED:
            return {
                ...state,
                isAuthHost:true,
                isLoading:false,
                host:action.payload
            };
        case HOST_LOGIN_SUCCESS:
        case HOST_REGISTER_SUCCESS:
        localStorage.setItem('token',action.payload.token)
            return {
                ...state,
                ...action.payload,
                isAuthHost:true,
                isLoading:false,
                isAuthenticated:true
            };
        case HOST_AUTH_ERROR:
        case HOST_LOGIN_FAIL:
        case HOST_LOGOUT_SUCCESS:
        case HOST_REGISTER_FAIL:
            localStorage.removeItem('token');
        return {
            ...state,
            token :null,
            host:null,
            isAuthHost:false,
            isLoading:false,
            role:null
        };
        default:
            return state;
        
    }
}