import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBContainer, MDBMask, MDBView,MDBBtn } from 'mdbreact';
import { BrowserRouter as Router,Link } from 'react-router-dom';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }

  render() {
    return (
      <div>
        <header>
          
          <MDBView src="https://cdn.pixabay.com/photo/2017/12/02/06/25/prka-2992314_960_720.jpg">
            <MDBMask overlay="indigo-slight" className="flex-center flex-column text-white text-center">
              <h2 style={{fontSize:'70px'}}>Let's get lost in Paradise</h2>
              <h4 style={{fontSize:'40px'}}>Please choose Your identity</h4>
              <div style={{display:'flex', flexDirection:'row',justifyContent:"space-around"}}>
                <MDBBtn gradient="purple"><Link to="/newuser">NewUser</Link></MDBBtn>
                {/* <MDBBtn gradient="purple"><Link to="/user">User</Link></MDBBtn>
                <MDBBtn gradient="purple"><Link to="/admin">Admin</Link></MDBBtn> */}
                <MDBBtn gradient="purple"><Link to="/login">Login</Link></MDBBtn>
                {/* <MDBBtn gradient="blue">Event Creator</MDBBtn>
                <MDBBtn gradient="aqua">Host</MDBBtn> */}
              </div>
            </MDBMask>
          </MDBView>
          
        </header>
      </div>
    );
  }
}

export default Welcome;