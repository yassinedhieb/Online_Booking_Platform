
import {GET_RESERVATIONS,DELETE_RESERVATION,ADD_RESERVATION,RESERVATIONS_LOADING,EDIT_RESERVATION} from '../actions/types';

const initialState={
    reservations:[],
    loading:false
}

export default function(state=initialState,action){
    switch(action.type){
            case GET_RESERVATIONS:
                return {
                    ...state,
                    reservations:action.payload,
                    loading:false
                }
            case DELETE_RESERVATION:
                return {
                ...state,
                reservations:state.reservations.filter(reservation=>reservation._id!==action.payload)
            };
           case EDIT_RESERVATION:
            return {
               ...state,
               reservations:state.reservations.filter(reservation=>reservation._id!==action.payload)
           };
           
           case ADD_RESERVATION:
            return {
               ...state,
               reservations:[action.payload,...state.reservations]
           };
           case RESERVATIONS_LOADING:
            return {
               ...state,
               loading:true
           };
        default :
         return state;
    }
}