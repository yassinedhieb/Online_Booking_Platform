import { GET_RESERVATIONS, DELETE_RESERVATION, ADD_RESERVATION,RESERVATIONS_LOADING, EDIT_RESERVATION } from './types';
import axios from 'axios'
import {tokenConfig} from './authActions';
import {returnErrors} from './errorActions';

const setReseravtionsLoaoding=()=>{
    return {
        type:RESERVATIONS_LOADING
    };
};

export const getReservations=()=>dispatch=>{
    // dispatch(setReservationsLoaoding());
    axios
    .get(('/api/Reservations'))
    .then(res=>
        dispatch({
            type:GET_RESERVATIONS,
            payload:res.data
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
}
// export const getReservation=(id)=>dispatch=>{
//     dispatch(setReservationsLoaoding());
//     axios
//     .get(`/api/reservations/update/${id}`)
//     .then(res=>
//         dispatch({
//             type:GET_RESERVATIONS,
//             payload:res.id
//         }))
//         .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
// }
export const getReseravtionForHost=(id)=>dispatch=>{
    dispatch(setReseravtionsLoaoding());
    axios
    .get(`/api/reservations/${id}`)
    .then(res=>
        dispatch({
            type:GET_RESERVATIONS,
            payload:res.id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
}
// export const addReservation=(a)=>dispatch=>{
//     console.log(a)
//     axios.post('/api/reservations',a)
//     .then(res=>dispatch({
//         type:ADD_RESERVATION,
//         payload:res.data
//     }))
//     .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
//     // window.location = '/host';

// };
// export const editReservation=({sector,governorate,maison_dhote,num,email,website,image},id)=>dispatch=>{
//     const body =({maison_dhote,sector,num,email,website,governorate,image})
//     axios.put(`/api/reservations/update/${id}`,body).then(res=>
//         dispatch({
//             type:EDIT_RESERVATION,
//             payload:id
//         }))
//         .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))
//         window.location = '/user/searchReservation';
// };
export const deleteReservation=(id)=>(dispatch,getState)=>{
    axios.delete(`/api/reservations/${id}`,tokenConfig(getState)).then(res=>
        dispatch({
            type:DELETE_RESERVATION,
            payload:id
        }))
        .catch(err=>dispatch(returnErrors(err.response.data,err.response.status)))

};


