import React from 'react';
import {Route} from 'react-router-dom'
import BlogPage from '../components/Blog';
import AppNavbar from '../components/AppNavbar2';
import ShoppingList from "../components/ShoppingList";
import Contact from '../components/Contact';
import Team from '../components/Team';
import LoginModal from '../components/auth/LoginModal';
import Footer from '../components/GeneralFooter';
import itemDetails from '../components/itemDetails';
import AboutUs from '../components/About/AboutUs';
import Commitment from "../components/About/Commitment";


const AdminRoutes = (props) => {
    return ( <>

        <Route path={`${props.match.path}`} component={AppNavbar}/>
        <Route path={`${props.match.path}`} exact component={BlogPage}/>
        <Route path={`${props.match.path}/aboutus`} exact component={AboutUs}/>
        <Route path={`${props.match.path}/commitment`} exact component={Commitment}/>
        <Route path={`${props.match.path}/team`} exact component={Team}/>
        <Route path={`${props.match.path}/contact`} exact component={Contact}/>
        <Route path={`${props.match.path}/searchItem`} exact component={ShoppingList}/>
        <Route path={`${props.match.path}/itemDetails/:id`} exact component={itemDetails}/>
        <Route path={`${props.match.path}/login`} exact component={LoginModal}/>
        <Route path={`${props.match.path}`} component={Footer}/>

       

    </> );
}
 
export default AdminRoutes;