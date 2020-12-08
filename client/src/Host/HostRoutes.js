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
import Chart from './Chart';
import AddEvent from './AddEvent';
import NewItemDetails from './NewItemDetails';
import ReservationInvitations from './ReservationInvitations';

const HostRoutes = (props) => {
    console.log(props.isAuth)
    return ( <>
    

    <React.Fragment>
        <Route path={`${props.match.path}`} component={SideNavigation}/>    
          <main id="content" className="p-10" >
          <Route path={`${props.match.path}`} component={TopNavigation}/>  
          <MDBContainer>
        {/* <Route path={`${props.match.path}/addItem`} component={addItem}/> */}
        <Route path={`${props.match.path}`} exact component={NewItemDetails}/>
        <Route path={`${props.match.path}/editlocation/:id`} component={EditLocation}/>
        <Route path={`${props.match.path}/reservations/:id`} component={ReservationInvitations}/>
        <Route path={`${props.match.path}/contact`} component={Contact}/>
        <Route path={`${props.match.path}/AddEvent`} component={AddEvent}/>
        <Route path={`${props.match.path}/data`} component={() => <Chart location={`Sfax`} />}/>


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