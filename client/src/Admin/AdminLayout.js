import React from 'react';
import { withRouter } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import SideNavigation from './sideNavigation copy';
import Footer from './Footer';
import { MDBContainer, MDBRow } from 'mdbreact';
import { Container } from 'reactstrap';
import AdminRoutes from './AdminRoutes';


const AdminLayout = (props) => {
    return (
          
        <div>
         
         
         
          
        {props.children}
        
       
       
        </div>
         
        
       
       
      );
}
 
export default withRouter(AdminLayout);