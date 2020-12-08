
import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect}from'react-redux';






const PrivateRoutes = ({render:Component,isAuth,...rest}) => {
    console.log(isAuth)
    return ( 
        <Route {...rest} render={(props)=>((!isAuth)?<Component {...props} isAuth={isAuth}/>:<Redirect to ={{pathname:'/',state:{from:props.location}}}/>)}/>

     );
}
const mapStateToProps=(state)=>{
    return {
isAuth:state.auth.isAuthAdmin
    }
}
 
export default connect(mapStateToProps,null)(withRouter(PrivateRoutes));