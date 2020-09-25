import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css'
import AppNavbar2 from './components/AppNavbar2';
import Carousel1 from './components/Carousel';
import ShoppingList from './components/ShoppingList';

import addItem from './components/addItem';
import map from './components/map';
import itemDetails from './components/itemDetails'
import EditLocation from "./components/EditLocation.js";
import {Carousel, Container} from 'reactstrap';
import {Provider} from'react-redux';
import store from './store';
import {loadUser} from './actions/authActions';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import BlogPage from './components/Blog.js';
import Map2 from './components/map2';
import ContactPage from './components/Contact';
import AdminLayout from './Admin/AdminLayout';
import AdminRoutes from './Admin/AdminRoutes';
import HostLayout from "./Host/HostLayout";
import HostRoutes from "./Host/HostRoutes";
import EventCreatorLayout from "./EventCreator/EventCreatorLayout";
import EventCreatorRoutes from './EventCreator/EventCreatorRoutes';
import UserLayout from './User/UserLayout';
import UserRoutes from './User/UserRoutes'
import Welcome from './components/WelcomePage'
import NewUser from "./components/NewUser";
import Footer from './components/GeneralFooter';
import Login from "./components/Login"
import Welcome2 from "./components/Welcome2";
import PrivateRoutes from './Admin/PrivateRoutes';
import Switch from 'react-bootstrap/esm/Switch';
import LoginModal from './components/auth/LoginModal';
import PropTypes from 'prop-types';
import Weather from './components/Weather/Weather';



class App extends Component {
 
    constructor(props) {
      super(props);
      this.state = {  }
    }
    static propTypes={
      isAuthenticated:PropTypes.bool,
  };
    
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
  return (
    <Provider store={store}>
      <div style={{backgroundColor:'#F0EBEA'}}>
      
    <Router>
    
      {/* <Route  path='/' component={AppNavbar2}/> */}
        {/* <Route path="/" exact component={map}/> */}
      {/* <Route path="/" exact component={Carousel1}/> */}
      <Route path="/edit/:id" component={EditLocation} />
      <Route path="/newuser" component={NewUser} />
      
     
      
      
      {/* <Route path="/" exact component={BlogPage}/>    */}
      <Route path="/" exact component={Welcome}/>
      {/* <Route path="/welcome" component={Welcome2}/> */}
      <Container>  
      <Route path="/addItem" component={addItem}/>
      </Container> 
      <Route path="/searchItem/:id" component={itemDetails}/>
     
      <Route path="/map" exact component={ContactPage}/>
      <Route path="/login" exact component={LoginModal}/>
      
      <Route path='/user' render={(props)=><UserLayout><UserRoutes {...props}/></UserLayout>}/>
      <Route path='/eventcreator' render={(props)=><EventCreatorLayout><EventCreatorRoutes {...props}/></EventCreatorLayout>}/>
      <Route path='/host' render={(props)=><HostLayout><HostRoutes {...props}/></HostLayout>}/>
      <PrivateRoutes path='/admin' render={(props)=><AdminLayout><AdminRoutes {...props}/></AdminLayout>}/>
      <Route path="/weather" component={Weather}/>

    </Router>
    </div>
    </Provider>

  );
}
}
export default App;
