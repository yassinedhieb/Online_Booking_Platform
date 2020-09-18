import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
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
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import BlogPage from './components/Blog.js';
import Map2 from './components/map2';
import ContactPage from './components/Contact';
import AdminLayout from './Admin/AdminLayout';
import AdminRoutes from './Admin/AdminRoutes';
// import MapLeaf from "./components/MapLeaf";
// import {Map,TileLayer} from 'react-leaflet';

// const DEFAULT_LANGITUDE=-123;
// const DEFAULT_LATITUDE=48;






class App extends Component {
 
    constructor(props) {
      super(props);
      this.state = {  }
    }
    
  componentDidMount(){
    store.dispatch(loadUser());
  }
  render(){
  return (
    <Provider store={store}>
      <div style={{backgroundColor:'#F0EBEA'}}>
      
    <Router>
    
      <Route  path='/' component={AppNavbar2}/>
        {/* <Route path="/" exact component={map}/> */}
      <Route path="/" exact component={Carousel1}/>
      <Route path="/edit/:id" component={EditLocation} />
      
      <Route path="/" exact component={BlogPage}/>   
      <Container>  
      <Route path="/addItem" component={addItem}/>
      </Container> 
      <Route path="/searchItem" component={ShoppingList}/>
      <Route path="/searchItem/:id" component={itemDetails}/>
     
      <Route path="/map" exact component={ContactPage}/>
      <Route path='/admin' render={(props)=><AdminLayout><AdminRoutes {...props}/></AdminLayout>}/>
     
    </Router>
    
    
    </div>
    </Provider>


  );
}
}
export default App;
