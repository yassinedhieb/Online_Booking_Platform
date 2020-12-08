import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon } from 'mdbreact';
import { logout } from '../actions/authActions';
import Logout from '../components/auth/Logout';

class TopNavigation extends Component {
    state = {
        collapse: false
    }

    onClick = () => {
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <MDBNavbar className="flexible-navbar" light expand="md" scrolling>
                <MDBNavbarBrand href="/admin">
                    <strong>PROJECT</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick = { this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to={`${this.props.match.path}/addItem`}>Add Item</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active>
                            <MDBNavLink to={`${this.props.match.path}/searchItem`}>Items</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem active>
                            <MDBNavLink to="/user">UI</MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                    <MDBNavbarNav right>
                        <MDBNavItem active>
                            <MDBNavLink to={`${this.props.match.path}/newadmin`}>New Admin</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <Logout/>
                        </MDBNavItem>
                        <MDBNavItem>
                            <a className="nav-link navbar-link" rel="noopener noreferrer" target="_blank" href="https://twitter.com/mdbootstrap"><MDBIcon fab icon="twitter" /></a>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
        );
    }
}

export default TopNavigation;