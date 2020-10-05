import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

function saveToLocalStorage(state){
    try{
        const serializedState=JSON.stringify(state)
        localStorage.setItem('state',serializedState)
    } catch(e){
        console.log(e)
    }
}
function loadFromLocalStorage(){
    try{
        const serializedState=localStorage.getItem('state')
        if(serializedState===null) return undefined
        return JSON.parse(serializedState)
    } catch (e){
        console.log(e)
        return undefined
    }
}
const initialState={};

const middleware=[thunk];

const persistedState=loadFromLocalStorage()
const store = createStore(rootReducer,persistedState,compose(applyMiddleware(...middleware),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    
    ));

store.subscribe(()=>saveToLocalStorage(store.getState()))

export default store;