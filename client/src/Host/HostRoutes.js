import { MDBContainer } from 'mdbreact';
import React from 'react';
import {Route} from 'react-router-dom'
import SideNavigation from './sideNavigation copy';
import TopNavigation from './TopNavigation';
import {connect}from'react-redux';
import Footer from './Footer';
import Profile from './Profile';
import itemDetails from './itemDetails';
import Contact from '../components/Contact'
import EditLocation from '../components/EditLocation';

const HostRoutes = (props) => {
    console.log(props.isAuth)
    return ( <>
    

    <React.Fragment>
        <Route path={`${props.match.path}`} component={SideNavigation}/>    
          <main id="content" className="p-10" >
          <Route path={`${props.match.path}`} component={TopNavigation}/>  
          <MDBContainer>
        {/* <Route path={`${props.match.path}/addItem`} component={addItem}/> */}
        <Route path={`${props.match.path}`} exact component={itemDetails}/>
        <Route path={`${props.match.path}/edit/:id`} component={EditLocation}/>
        <Route path={`${props.match.path}/contact`} component={Contact}/>

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

export default connect(mapStateToProps,null)(HostRoutes);