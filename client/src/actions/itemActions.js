import { GET_ITEMS, DELETE_ITEM, ADD_ITEM,ITEMS_LOADING, EDIT_ITEM } from './types';
import axios from 'axios'
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions'

export const getItems=()=>dispatch=>{
    dispatch(setItemsLoaoding());
    axios
    .get(('/api/locations'))
    .then(res=>
        dispatch({
            type:GET_ITEMS,
            payload:res.data
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
}
export const getItem=(id)=>dispatch=>{
    dispatch(setItemsLoaoding());
    axios
    .get(`/api/locations/update/${id}`)
    .then(res=>
        dispatch({
            type:GET_ITEMS,
            payload:res.id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
}
export const getItemForHost=(id)=>dispatch=>{
    dispatch(setItemsLoaoding());
    axios
    .get(`/api/locations/${id}`)
    .then(res=>
        dispatch({
            type:GET_ITEMS,
            payload:res.id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
}
export const addItem=(a)=>dispatch=>{
    console.log(a)
    axios.post('/api/locations',a)
    .then(res=>dispatch({
        type:ADD_ITEM,
        payload:res.data
    }))
    .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
    // window.location = '/newHost';

};
export const editItem=(a,id)=>dispatch=>{
    console.log(a)
    axios.put(`/api/locations/update/${id}`,a).then(res=>
        dispatch({
            type:EDIT_ITEM,
            payload:id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
        // window.location = '/host';
};
export const editItemHost=(a,id)=>dispatch=>{
    console.log(a)
    axios.put(`/api/locations/updateHost/${id}`,a).then(res=>
        dispatch({
            type:EDIT_ITEM,
            payload:id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
        // window.location = '/host';
};
export const deleteItem=(id)=>(dispatch,getState)=>{
    axios.delete(`/api/locations/${id}`,tokenConfig(getState)).then(res=>
        dispatch({
            type:DELETE_ITEM,
            payload:id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))

};


export const setItemsLoaoding=()=>{
    return {
        type:ITEMS_LOADING
    };
};