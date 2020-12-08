import React from "react";
import { MDBRow, MDBCol, MDBInput, MDBBtn,Container,MDBContainer,MDBCard,MDBAlert } from "mdbreact";

import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {registerHost} from '../../actions/authActions';
import{clearErrors} from '../../actions/errorActions';
import {addItem,getItems} from '../../actions/itemActions';



class NewHost extends React.Component {
  state = {
    name: "",
    last_name: "",
    email: "",
    city: "",
    ID:this.props.match.params.id,
    password: "",
    ref: ''
  };
      static propTypes={
        getItems:PropTypes.func.isRequired,
        item:PropTypes.object.isRequired,
        isAuthHost:PropTypes.bool,
        error:PropTypes.object.isRequired,
        registerHost:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
    };
    componentDidMount(id){
      this.props.getItems(id);
  }

  componentDidUpdate(prevProps){
      const {error,isAuthHost} = this.props;
      if(error!==prevProps.error){
          //check for register error
          if(error.id==='HOST_REGISTER_FAIL'){
              this.setState({msg:error.msg.msg})
          } else{
              this.setState({msg:null})
          }
      }
      if(isAuthHost){
        this.props.history.push('/')
    }
  }

   ;
   onChange=(e)=>{
    this.setState({ref:this.props.item.items.filter(el => el.num==this.state.ID).map(el =>el._id)})
       this.setState({[e.target.name]:e.target.value})
   }
   onSubmit=(e)=>{
       e.preventDefault();
      //  const {name,email,password}=this.state;
       //create user object
       const newHost={
           name:this.state.name,
           last_name:this.state.last_name,
           city:this.state.city,
           email:this.state.email,
           password:this.state.password,
           ref:this.state.ref,
           role:"pending host"
       }
       console.log(newHost)
       this.props.registerHost(newHost);
   };

  render() {
    console.log(this.props.item.items.filter(el => el.num==this.state.ID).map(el =>el._id))
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
  item:state.item,
  isAuthHost:state.auth.isAuthHost,
  error:state.error    
})


export default connect(mapStateToProps,{registerHost,getItems,clearErrors})(NewHost)