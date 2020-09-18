import React,{Component,Fragment} from 'react';

import{
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container,
    Button
} from 'reactstrap';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import RegisterModel from './auth/registerModel';
import LoginModal from './auth/LoginModal'
import Logout from './auth/Logout';
import {Link} from 'react-router-dom';

class AppNavbar extends Component{
    
        state={
            isOpen:false
        }
        static propTypes={
            auth:PropTypes.object.isRequired
        }
        toggle=()=>{
            this.setState({
                isOpen:!this.state.isOpen
            });

        }

        render(){
            const {isAuthenticated,user}=this.props.auth;
            const authLinks=(
                <Fragment>
                    <NavItem>
                        <spin className="navbar-text mr-3">
                            <strong>{user?`Welcome ${user.name}`: ''}</strong>
                        </spin>
                    </NavItem>
                        <NavItem>
                                     <Logout/>
                        </NavItem>
                        <NavItem>
                                    <Link to='/addItem' >
                                        <Button>Add Item</Button>
                                    </Link>
                        </NavItem>
                </Fragment>
            );
            const guestLinks=(
                <Fragment>
                    <NavItem>                               
                                    <RegisterModel/>
                        </NavItem>
                        <NavItem>
                                     <LoginModal/>
                    </NavItem>
                </Fragment>
            )
            return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5" style={{borderRadius: "30px"}}  fixed="top">
                <Container>
                    <NavbarBrand href="/">
                        Global
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" nabvar>
                            {isAuthenticated? authLinks:guestLinks}
                        </Nav>
                        <NavLink>
                        <Link to='/searchItem' >
                            <li stye={{listStyleType: 'none'}}>Search</li>
                        </Link>
                        </NavLink>
                    </Collapse>
                </Container>
                </Navbar>
                {/* <CarouselPage/> */}
            </div>
            )}
        

}

const mapStateToProps=state=>({
    auth:state.auth
})
export default connect(mapStateToProps,null)(AppNavbar)