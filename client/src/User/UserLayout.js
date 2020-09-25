import React from 'react';
import { withRouter } from 'react-router-dom';
import AppNavbar from '../components/AppNavbar2';



const AdminLayout = (props) => {
    return (
    <div>
            {props.children}

    </div>
        );
}
 
export default withRouter(AdminLayout);