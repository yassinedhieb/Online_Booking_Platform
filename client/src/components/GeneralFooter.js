import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon,MDBListGroupItem,MDBListGroup,MDBLink } from 'mdbreact';
import {Link} from 'react-router-dom'

const GFooter = () => {
    return (
        <div style={{backgroundColor:"#B1F9F4" }}>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <div style={{display:"flex",justifyContent:"column" }}>
            <ul>
                <li style={{listStyle:"none",fontSize:"200%"}}>About</li>
                <li style={{listStyle:"none"}}><Link to="/user/aboutus">Who are We</Link></li>
                <li style={{listStyle:"none"}}><Link to="/user/team">Team</Link></li>
                <li style={{listStyle:"none"}}><Link to="/user/contact">Join the Team</Link></li>
                <li style={{listStyle:"none"}}><Link to="/user/commitment">Commitment</Link></li>
            </ul>
            </div>
            <div style={{display:"flex",justifyContent:"column" }}>
            <ul>
                <li style={{listStyle:"none",fontSize:"200%"}}>Community</li>
                <li style={{listStyle:"none"}}>Partners</li>
                <li style={{listStyle:"none"}}>Accessibilty</li>
                <li style={{listStyle:"none"}}>Gift Cards</li>
            </ul>
            </div>
            <div style={{display:"flex",justifyContent:"column" }}>
            <ul>
                <li style={{listStyle:"none",fontSize:"200%"}}>Host</li>
                <li style={{listStyle:"none"}}>Host a home</li>
                <li style={{listStyle:"none"}}>Host an Event</li>
                <li style={{listStyle:"none"}}>Airbnb Plus</li>
                <li style={{listStyle:"none"}}>Host Commitment</li>   
            </ul>
            </div>
            <div style={{display:"flex",justifyContent:"column" }}>
            <ul>
                <li style={{listStyle:"none",fontSize:"200%"}}>Event Creator</li>
                <li style={{listStyle:"none"}}>Become one</li>
                <li style={{listStyle:"none"}}>What we Offer</li>
                <li style={{listStyle:"none"}}>Your Commitment</li>   
            </ul>
            </div>
            </div>
            <div style={{textAlign:"center"}}>
                <MDBIcon fab icon="facebook" className="mr-3"/>
                <MDBIcon fab icon="twitter" className="mr-3"/>
                <MDBIcon fab icon="youtube" className="mr-3"/>
                <MDBIcon fab icon="google-plus" className="mr-3"/>
                <MDBIcon fab icon="dribbble" className="mr-3"/>
                <MDBIcon fab icon="pinterest" className="mr-3"/>
                <MDBIcon fab icon="github" className="mr-3"/>
                <MDBIcon fab icon="codepen" className="mr-3"/>
            </div>
            <p className="footer-copyright mb-0 py-3 text-center">
                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
            </p>
        </div>
    );
}

export default GFooter;