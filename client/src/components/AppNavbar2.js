import React, { Component,Fragment } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModel from './auth/registerModel';
import LoginModal from './auth/LoginModal'
import Logout from './auth/Logout';
import {Link} from 'react-router-dom';

class AppNavbar extends Component {

state = {
  isOpen: false
};
static propTypes={
    auth:PropTypes.object.isRequired
}


toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
    const {isAuthenticated,user}=this.props.auth;
            const authLinks=(
            <Fragment>
            <MDBNavbarNav left>
                <MDBNavItem active>
                    <spin className="navbar-text mr-3">
                                <strong>{user?`Welcome ${user.name}`: ''}</strong>
                    </spin>
                </MDBNavItem>
                <MDBNavItem>
                    <Logout/>
                </MDBNavItem>
                <MDBNavItem>
                    <MDBNavLink to="/addItem">Add Item</MDBNavLink>
                </MDBNavItem>
            </MDBNavbarNav>
            </Fragment>
            );
            const guestLinks=(
            <Fragment>
                    <MDBNavbarNav left>
                        <MDBNavItem>
                            <RegisterModel/>    
                        </MDBNavItem>
                        <MDBNavItem>
                            <LoginModal/>
                        </MDBNavItem>
                    </MDBNavbarNav>
            </Fragment>)
  return (
  
      <MDBNavbar color="default-color" dark fixed="top" expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Navbar</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to='/'>Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to='/searchItem'>Search</MDBNavLink>
            </MDBNavItem>
            {isAuthenticated? authLinks:guestLinks}
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Dropdown</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
 
    );
  }
}

const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps,null)(AppNavbar)