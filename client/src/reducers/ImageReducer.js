
import {GET_IMAGES,DELETE_IMAGE,ADD_IMAGE,IMAGES_LOADING,EDIT_IMAGE} from '../actions/types';

const initialState={
    images:[],
    loading:false
}

export default function(state=initialState,action){
    switch(action.type){
            case GET_IMAGES:
                return {
                    ...state,
                    images:action.payload,
                    loading:false
                }
            case DELETE_IMAGE:
                return {
                ...state,
                images:state.images.filter(image=>image._id!==action.payload)
            };
           case EDIT_IMAGE:
            return {
               ...state,
               images:state.images.filter(image=>image._id!==action.payload)
           };
           
           case ADD_IMAGE:
            return {
               ...state,
               images:[action.payload,...state.images]
           };
           case IMAGES_LOADING:
            return {
               ...state,
               loading:true
           };
        default :
         return state;
    }
}