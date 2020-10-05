import { MDBContainer } from 'mdbreact';
import React from 'react';
import {Route} from 'react-router-dom'
import { registerAdmin } from '../actions/authActions';
import addItem from './../components/addItem';
import NewAdminRegister from './NewAdmin';
import SideNavigation from './sideNavigation copy';
import TopNavigation from './TopNavigation';
import {connect}from'react-redux';
import Footer from './Footer';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import itemDetails from './itemDetails';

const AdminRoutes = (props) => {
    console.log(props.isAuth)
    return ( <>
    

    <React.Fragment>
        <Route path={`${props.match.path}`} component={SideNavigation}/>    
          <main id="content" className="p-10" >
          <Route path={`${props.match.path}`} component={TopNavigation}/>  
          <MDBContainer>
          <Route path={`${props.match.path}/searchItem/:id`} component={itemDetails}/>
          <Route path={`${props.match.path}/searchItem`} exact component={ShoppingList}/>
        <Route path={`${props.match.path}/addItem`} component={addItem}/>
        <Route path={`${props.match.path}/newadmin`} component={NewAdminRegister}/>
        <Route path={`${props.match.path}`} exact component={Profile}/>

        </MDBContainer>
        
    </main>
    <Footer/>
    </React.Fragment>
   
    </> );
}
const mapStateToProps=(state)=>{
    return {
isAuth:state.auth.isAuthAdmin
    }
}

export default connect(mapStateToProps,null)(AdminRoutes);