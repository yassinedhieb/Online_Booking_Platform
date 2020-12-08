import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";

const AdminDetails = () => {
  return (
    <MDBCard className="my-5 px-5 pb-1 text-center">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold my-5">
          Our amazing team
        </h2>
        {/* <MDBRow className="text-md-left">
          <MDBCol lg="6" md="12" className="mb-5"> */}
            <MDBCol md="4" lg="6" className="float-left">
              <img
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                className="mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid"
                tag="img"
                alt="Sample avatar"
              />
            </MDBCol>
            <MDBCol md="8" lg="6" className="float-right">
              <h4 className="font-weight-bold mb-3">Mohamed Belguith</h4>
              <h6 className="font-weight-bold grey-text mb-3">
                Photographer
              </h6>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                eos id officiis hic tenetur.
              </p>
              <a href="#!" className="p-2 fa-lg fb-ic">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="p-2 fa-lg tw-ic">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="p-2 fa-lg dribbble-ic">
                <MDBIcon fab icon="dribbble" />
              </a>
            </MDBCol>
          {/* </MDBCol>
        </MDBRow> */}
      </MDBCardBody>
    </MDBCard>
  );
}

export default AdminDetails;