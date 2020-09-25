import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";
import { Form } from "reactstrap";
import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {addMessage} from '../actions/saveMessageActions';
import{clearErrors} from '../actions/errorActions';

class Contact extends React.Component {
  state={
    name:"",
    email:"",
    subject:"",
    content:""
};
static propTypes={
    addMessage:PropTypes.func.isRequired
}
onChange=(e)=>{
  this.setState({[e.target.name]:e.target.value})
}
onSubmit=(e)=>{
  e.preventDefault();
 //  const {name,email,password}=this.state;

  //create user object
  const newMessage={
      name:this.state.name,
      email:this.state.email,
      subject:this.state.subject,
      content:this.state.content
  }
  console.log(newMessage)
  this.props.addMessage(newMessage);
  alert("message submitted")
};
  render(){  
    return (
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      {/* <p className="text-center w-responsive mx-auto pb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p> */}
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <div >
                <h3 className="mt-2">
                  <MDBIcon icon="envelope" /> Write to us:
                </h3>
              </div>
              <p className="dark-grey-text">
                We'll write rarely, but only the best content.
              </p>
              <form onSubmit ={this.onSubmit}>
              <div className="md-form">
              <MDBInput
                icon='user'
                value={this.state.name}
                name='name'
                onChange={this.onChange}
                type='text'
                id='materialFormRegisterNameEx'
                label='First name'
                required
              />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  name='email'
                  onChange={this.onChange}
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  name='subject'
                  onChange={this.onChange}
                  label="Subject"
                  iconClass="grey-text"
                  type="text"
                  id="form-subject"
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="pencil-alt"
                  onChange={this.onChange}
                  name='content'
                  label="Icon Prefix"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-text"
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue" onClick={this.onSubmit} >Submit</MDBBtn>
              </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            /> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6789343.066898607!2d5.066425381767909!3d33.80950217772952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2stn!4v1600348761072!5m2!1sen!2stn" width="100%" height="100%" frameborder="0" style={{border:"0px"}}allowfullscreen="" aria-hidden="false" tabindex="0"/>
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="map-marker-alt" />
              </MDBBtn>
              <p>Sfax</p>
              <p className="mb-md-0">Tunisia</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
              </MDBBtn>
              <p>+216 27812935</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
              <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
              </MDBBtn>
              <p>info@gmail.com</p>
              <p className="mb-md-0">yassine.dhieb@enis.tn</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
  }
}

const mapStateToProps=state=>({
  messgae:state.messgae,
  error:state.error    
})

export default connect(mapStateToProps,{addMessage})(Contact)