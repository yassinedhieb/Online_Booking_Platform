import React from 'react';
import {Route} from 'react-router-dom'
import addItem from './../components/addItem'
const AdminRoutes = (props) => {
    return ( <>
        
        <Route path={`${props.match.path}/addItem`} component={addItem}/>
    </> );
}
 
export default AdminRoutes;