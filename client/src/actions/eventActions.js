import { GET_EVENTS, DELETE_EVENT, ADD_EVENT,EVENTS_LOADING, EDIT_EVENT } from './types';
import axios from 'axios'
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions'

export const getEvents=()=>dispatch=>{
    dispatch(setEventsLoaoding());
    axios
    .get(('/api/events'))
    .then(res=>
        dispatch({
            type:GET_EVENTS,
            payload:res.data
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
}
export const getEvent=(id)=>dispatch=>{
    dispatch(setEventsLoaoding());
    axios
    .get(`/api/events/update/${id}`)
    .then(res=>
        dispatch({
            type:GET_EVENTS,
            payload:res.id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
}
export const getEventForHost=(id)=>dispatch=>{
    dispatch(setEventsLoaoding());
    axios
    .get(`/api/events/${id}`)
    .then(res=>
        dispatch({
            type:GET_EVENTS,
            payload:res.id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
}
export const addEvent=(a)=>dispatch=>{
    console.log(a)
    axios.post('/api/events',a)
    .then(res=>dispatch({
        type:ADD_EVENT,
        payload:res.data
    }))
    .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
    // window.location = '/host';

};
export const editEvent=({sector,governorate,maison_dhote,num,email,website,image},id)=>dispatch=>{
    const body =({maison_dhote,sector,num,email,website,governorate,image})
    axios.put(`/api/events/update/${id}`,body).then(res=>
        dispatch({
            type:EDIT_EVENT,
            payload:id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
        window.location = '/user/searchEvent';
};
export const deleteEvent=(id)=>(dispatch,getState)=>{
    axios.delete(`/api/events/${id}`,tokenConfig(getState)).then(res=>
        dispatch({
            type:DELETE_EVENT,
            payload:id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))

};


export const setEventsLoaoding=()=>{
    return {
        type:EVENTS_LOADING
    };
};