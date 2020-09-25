import { GET_ITEMS, DELETE_ITEM, ADD_ITEM,ITEMS_LOADING, EDIT_ITEM,ADD_MESSAGE } from './types';
import axios from 'axios'
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions'

// export const getItems=()=>dispatch=>{
//     dispatch(setItemsLoaoding());
//     axios
//     .get(('/api/locations'))
//     .then(res=>
//         dispatch({
//             type:GET_ITEMS,
//             payload:res.data
//         }))
//         .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
// }
export const addMessage=({name,email,subject,content})=>dispatch=>{
    const body =({name,email,subject,content})
    console.log(body)
    axios.post('/api/messages',body)
    .then(res=>dispatch({
        type:ADD_MESSAGE,
        payload:res.data
    }))
    .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
    window.location = '/user';

};
// export const editItem=({sector,governorate,maison_dhote,num,email,website,image},id)=>dispatch=>{
//     const body =({maison_dhote,sector,num,email,website,governorate,image})
//     axios.put(`/api/locations/update/${id}`,body).then(res=>
//         dispatch({
//             type:EDIT_ITEM,
//             payload:id
//         }))
//         .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
//         window.location = '/searchItem';
// };
// export const deleteItem=(id)=>(dispatch,getState)=>{
//     axios.delete(`/api/locations/${id}`,tokenConfig(getState)).then(res=>
//         dispatch({
//             type:DELETE_ITEM,
//             payload:id
//         }))
//         .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))

// };


export const setItemsLoaoding=()=>{
    return {
        type:ITEMS_LOADING
    };
};