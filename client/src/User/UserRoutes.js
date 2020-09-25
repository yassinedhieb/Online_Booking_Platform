import React from 'react';
import {Route} from 'react-router-dom'
import BlogPage from '../components/Blog';
import AppNavbar from '../components/AppNavbar2';
import ShoppingList from "../components/ShoppingList";
import Contact from '../components/Contact';
import Team from '../components/Team';
import LoginModal from '../components/auth/LoginModal';
import Footer from '../components/GeneralFooter';
import itemDetails from '../components/itemDetails'



const AdminRoutes = (props) => {
    return ( <>

        <Route path={`${props.match.path}`} component={AppNavbar}/>
        <Route path={`${props.match.path}`} exact component={BlogPage}/>
        <Route path={`${props.match.path}`} exact component={Team}/>
        <Route path={`${props.match.path}`} exact component={Footer}/>
        <Route path={`${props.match.path}/contact`} exact component={Contact}/>
        <Route path={`${props.match.path}/searchItem`} exact component={ShoppingList}/>
        <Route path={`${props.match.path}/itemDetails/:id`} exact component={itemDetails}/>
        <Route path={`${props.match.path}/login`} exact component={LoginModal}/>
       

    </> );
}
 
export default AdminRoutes;