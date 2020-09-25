import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn,Container,MDBContainer,MDBCard,MDBAlert } from "mdbreact";

import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {register} from '../actions/authActions';
import{clearErrors} from '../actions/errorActions';


class NewUserRegister extends React.Component {
  state = {
    name: "",
    last_name: "",
    email: "",
    city: "",
    password: ""
  };
      static propTypes={
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        register:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
    };

  componentDidUpdate(prevProps){
      const {error,isAuthenticated} = this.props;
      if(error!==prevProps.error){
          //check for register error
          if(error.id==='REGISTER_FAIL'){
              this.setState({msg:error.msg.msg})
          } else{
              this.setState({msg:null})
          }
      }
      if(isAuthenticated){
        this.props.history.push('/user')
    }
  }

   ;
   onChange=(e)=>{
       this.setState({[e.target.name]:e.target.value})
   }
   onSubmit=(e)=>{
       e.preventDefault();
      //  const {name,email,password}=this.state;

       //create user object
       const newUser={
           name:this.state.name,
           last_name:this.state.last_name,
           city:this.state.city,
           email:this.state.email,
           password:this.state.password
       }
       console.log(newUser)
       this.props.register(newUser);
   };

  render() {
    return (
      
      <MDBContainer>
        {this.state.msg ? (<MDBAlert color='danger'>{this.state.msg}</MDBAlert>):null}
          <form
          className='needs-validation'
          onSubmit={this.onSubmit}
          noValidate
        >
          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='user'
                value={this.state.fname}
                name='name'
                onChange={this.onChange}
                type='text'
                id='materialFormRegisterNameEx'
                label='First name'
                required
              >
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='address-card'
                value={this.state.lname}
                name='last_name'
                onChange={this.onChange}
                type='text'
                id='materialFormRegisterEmailEx2'
                label='Last name'
                required
              >
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                icon='envelope-open'
                value={this.state.email}
                onChange={this.onChange}
                type='email'
                id='materialFormRegisterConfirmEx3'
                name='email'
                label='Your Email address'
              >
                <small id='emailHelp' className='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md='4'>
              <MDBInput
                icon='city'
                value={this.state.city}
                onChange={this.onChange}
                type='text'
                id='materialFormRegisterPasswordEx4'
                name='city'
                label='City'
                required
              >
                <div className='invalid-feedback ml-4 pl-3'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
            <MDBCol md='4'>
              <MDBInput
                  value={this.state.password}
                  icon="lock"
                  type='password'
                  name='password'
                  onChange={this.onChange}
                  id='materialFormRegisterEmailEx2'
                  label='Password'
                  required
                >
                <div className='invalid-feedback ml-4 pl-3'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback ml-4 pl-3'>Looks good!</div>
              </MDBInput>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBInput
              type='checkbox'
              value='conditions'
              id='materialInvalidCheck'
              required
              label='Agree to terms and conditions'
            >
              <div className='invalid-feedback'>
                You must agree before submitting.
              </div>
            </MDBInput>
          </MDBRow>
          <MDBBtn color='primary' type='submit'>
            Submit Form
          </MDBBtn>
        </form>
        </MDBContainer>
    );
  }
}
const mapStateToProps=state=>({
  isAuthenticated:state.auth.isAuthenticated,
  error:state.error    
})


export default connect(mapStateToProps,{register,clearErrors})(NewUserRegister)