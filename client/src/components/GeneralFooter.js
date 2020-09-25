import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon,MDBListGroupItem,MDBListGroup } from 'mdbreact';

const GFooter = () => {
    return (
        <div style={{backgroundColor:"#B1F9F4" }}>
            <div style={{display:"flex",justifyContent:"space-around"}}>
            <div style={{display:"flex",justifyContent:"column" }}>
            <ul>
                <li style={{listStyle:"none",fontSize:"200%"}}>About</li>
                <li style={{listStyle:"none"}}>How Airbnb works</li>
                <li style={{listStyle:"none"}}>Newsroom</li>
                <li style={{listStyle:"none"}}>Airbnb Plus</li>
                <li style={{listStyle:"none"}}>Airbnb Luxe</li>
                <li style={{listStyle:"none"}}>HotelTonight</li>
                <li style={{listStyle:"none"}}>Airbnb for Work</li>
                <li style={{listStyle:"none"}}>Olympics</li>
                <li style={{listStyle:"none"}}>Careers</li>
            </ul>
            </div>
            <div style={{display:"flex",justifyContent:"column" }}>
            <ul>
                <li style={{listStyle:"none",fontSize:"200%"}}>About</li>
                <li style={{listStyle:"none"}}>How Airbnb works</li>
                <li style={{listStyle:"none"}}>Newsroom</li>
                <li style={{listStyle:"none"}}>Airbnb Plus</li>
                <li style={{listStyle:"none"}}>Airbnb Luxe</li>
                <li style={{listStyle:"none"}}>HotelTonight</li>
                <li style={{listStyle:"none"}}>Airbnb for Work</li>
                <li style={{listStyle:"none"}}>Olympics</li>
                <li style={{listStyle:"none"}}>Careers</li>
            </ul>
            </div>
            <div style={{display:"flex",justifyContent:"column" }}>
            <ul>
                <li style={{listStyle:"none",fontSize:"200%"}}>About</li>
                <li style={{listStyle:"none"}}>How Airbnb works</li>
                <li style={{listStyle:"none"}}>Newsroom</li>
                <li style={{listStyle:"none"}}>Airbnb Plus</li>
                <li style={{listStyle:"none"}}>Airbnb Luxe</li>
                <li style={{listStyle:"none"}}>HotelTonight</li>
                <li style={{listStyle:"none"}}>Airbnb for Work</li>
                <li style={{listStyle:"none"}}>Olympics</li>
                <li style={{listStyle:"none"}}>Careers</li>
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