import axios from 'axios';
import {returnErrors} from './errorActions'

import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    ADMIN_REGISTER_FAIL,
    ADMIN_REGISTER_SUCCESS,
    ADMIN_LOGIN_SUCCESS
} from './types'

//check token and load user
export const loadUser=()=>(dispatch,getState)=>{
    //user loading
    dispatch({
        type:USER_LOADING
    });
    axios
    .get('/api/auth/user',tokenConfig(getState))
    .then(res=>dispatch({
        type:USER_LOADED,
        payload:res.data
    }))
    .catch(err=>{
        dispatch(returnErrors(err.response.data,err.response.status))
        dispatch({
            type:AUTH_ERROR
        });
    })
}
//Register User

export const register=({name,last_name,city,email,password})=>dispatch=>{
    //headers
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    //request body
    const body =JSON.stringify({
        name,last_name,city,email,password
    })
    axios.post('/api/users',body, config)
    .then(res=>dispatch({
        type:REGISTER_SUCCESS,
        payload:res.data
    }))
    .catch(err=>{
         dispatch(returnErrors(err.response.data,err.response.status,'REGISTER_FAIL'));
         dispatch({
             type:REGISTER_FAIL
         });
     });
};
export const registerAdmin=({name,last_name,city,email,password,role})=>dispatch=>{
    //headers
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    //request body
    const body =JSON.stringify({
        name,last_name,city,email,password,role
    })
    axios.post('/api/users',body, config)
    .then(res=>dispatch({
        type:ADMIN_REGISTER_SUCCESS,
        payload:res.data
    }))
    .catch(err=>{
         dispatch(returnErrors(err.response.data,err.response.status,'ADMIN_REGISTER_FAIL'));
         dispatch({
             type:ADMIN_REGISTER_FAIL
         });
     });
};
//login
export const login=({email,password})=>dispatch=>{
    //headers
    const config={
        headers:{
            'Content-Type':'application/json'
        }
    }
    //request body
    const body =JSON.stringify({
        email,password
    })
    axios.post('/api/auth',body, config)
    .then(res=>{if(res.data.role==="admin"){dispatch({
        type:ADMIN_LOGIN_SUCCESS,
        payload:res.data
    })}else{dispatch({type:LOGIN_SUCCESS,
        payload:res.data})}}
    )
    
    .catch(err=>{
         dispatch(returnErrors(err.response.data,err.response.status,'LOGIN_FAIL'));
         dispatch({
             type:LOGIN_FAIL
         });
     });
};
//logout user
export const logout =()=>{
    return {
        type:LOGOUT_SUCCESS
    }
}

//setup config/headers and token
export const tokenConfig=(getState)=>{
    //get token from localstorage
    const token=getState().auth.token;
    //headers
    const config={
        headers:{
            "content-type":"application/json"
        }
    }

    //if token=>add t headers
    if(token){
        config.headers['x-auth-token']=token;
    }
    return config;
}