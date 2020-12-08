import { GET_IMAGES, DELETE_IMAGE, ADD_IMAGE,IMAGES_LOADING, EDIT_IMAGE } from './types';
import axios from 'axios'
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions'

export const getImages=()=>dispatch=>{
    dispatch(setImagesLoaoding());
    axios
    .get(('/api/Images'))
    .then(res=>
        dispatch({
            type:GET_IMAGES,
            payload:res.data
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
}
export const getImage=(id)=>dispatch=>{
    dispatch(setImagesLoaoding());
    axios
    .get(`/api/Images/update/${id}`)
    .then(res=>
        dispatch({
            type:GET_IMAGES,
            payload:res.id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
}
export const getImageForHost=(id)=>dispatch=>{
    dispatch(setImagesLoaoding());
    axios
    .get(`/api/Images/${id}`)
    .then(res=>
        dispatch({
            type:GET_IMAGES,
            payload:res.id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
}
export const addImage=(a)=>dispatch=>{
    console.log(a)
    axios.post('/api/Images',a)
    .then(res=>dispatch({
        type:ADD_IMAGE,
        payload:res.data
    }))
    .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
    // window.Image = '/newHost';

};
export const editImage=(a,id)=>dispatch=>{
    console.log(a)
    axios.put(`/api/Images/update/${id}`,a).then(res=>
        dispatch({
            type:EDIT_IMAGE,
            payload:id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
        // window.Image = '/host';
};
export const editImageHost=(a,id)=>dispatch=>{
    console.log(a)
    axios.put(`/api/Images/updateHost/${id}`,a).then(res=>
        dispatch({
            type:EDIT_IMAGE,
            payload:id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
        // window.Image = '/host';
};
export const deleteImage=(id)=>(dispatch,getState)=>{
    axios.delete(`/api/Images/${id}`,tokenConfig(getState)).then(res=>
        dispatch({
            type:DELETE_IMAGE,
            payload:id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))

};


export const setImagesLoaoding=()=>{
    return {
        type:IMAGES_LOADING
    };
};