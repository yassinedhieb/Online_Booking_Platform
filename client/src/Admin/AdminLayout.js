import React from 'react';
import { withRouter } from 'react-router-dom';
import TopNavigation from './TopNavigation';
import SideNavigation from './sideNavigation copy';
import Footer from './Footer';
import { MDBContainer, MDBRow } from 'mdbreact';
import { Container } from 'reactstrap';


const AdminLayout = (props) => {
    return (<> <SideNavigation />
          
          <>
         
         
         
          <main id="content" className="p-10" >
          <TopNavigation />
          <MDBContainer>
        {props.children}
        </MDBContainer>
      
        </main>
        <Footer />
       
       
        </>
         
        
       
       
    </>  );
}
 
export default withRouter(AdminLayout);