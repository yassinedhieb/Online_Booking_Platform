import { MDBContainer } from 'mdbreact';
import React from 'react';
import {Route} from 'react-router-dom'
import { registerAdmin } from '../actions/authActions';
import addItem from './../components/addItem';
import NewAdminRegister from './NewAdmin';
import SideNavigation from './sideNavigation copy';
import TopNavigation from './TopNavigation';
import {connect}from'react-redux';
import Footer from '../components/GeneralFooter';
import Profile from './Profile';
import ShoppingList from './ShoppingList';
import itemDetails from './itemDetails';
import EditLocation from '../components/EditLocation';
import AdminDetails from './AdminDetails'
import NewItemDetails from '../components/NewItemDetails';
import HostInvitations from '../components/HostInvitations';

const AdminRoutes = (props) => {
    console.log(props.isAuth)
    return ( <>
    

    <React.Fragment>
        <Route path={`${props.match.path}`} component={SideNavigation}/>    
          <main id="content" className="p-10" >
          <Route path={`${props.match.path}`} component={TopNavigation}/>  
          <MDBContainer>
          <Route path={`${props.match.path}/invitations/:id`} component={NewItemDetails}/>
          <Route path={`${props.match.path}/searchItem`} exact component={ShoppingList}/>
          <Route path={`${props.match.path}/searchItem/:id`} exact component={NewItemDetails}/>
        <Route path={`${props.match.path}/addItem`} component={addItem}/>
        <Route path={`${props.match.path}/invitations`} exact component={HostInvitations}/>

        <Route path={`${props.match.path}/editlocation/:id`} component={EditLocation}/>
        <Route path={`${props.match.path}/newadmin`} component={NewAdminRegister}/>
        <Route path={`${props.match.path}/profile`} component={AdminDetails}/>
        <Route path={`${props.match.path}`} exact component={Profile}/>

        </MDBContainer>
        
    </main>
    <div style={{marginLeft:'15%'}}>
    <Footer/>
    </div>
    </React.Fragment>
   
    </> );
}
const mapStateToProps=(state)=>{
    return {
isAuth:state.auth.isAuthAdmin
    }
}

export default connect(mapStateToProps,null)(AdminRoutes);