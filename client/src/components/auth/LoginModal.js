import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    Form,
    FormGroup,
    Label,
    Input,
    ModalBody,
    NavLink,
    Alert
} from 'reactstrap';
import {MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBIcon,
    MDBCardHeader,
    MDBBtn,
    MDBInput} from 'mdbreact';

import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {login} from '../../actions/authActions';
import{clearErrors} from '../../actions/errorActions';



 class LoginModal extends Component{
     state={
         modal:false,
         email:'',
         password:'',
         msg:null
     };

    static propTypes={
        isAuthenticated:PropTypes.bool,
        isAuthAdmin:PropTypes.bool,
        isAuthHost:PropTypes.bool,
        error:PropTypes.object.isRequired,
        login:PropTypes.func.isRequired,
        clearErrors:PropTypes.func.isRequired
    };
    
    toggle=()=>{
        //clear errors
        this.props.clearErrors();
        this.setState({
            modal:!this.state.modal
        })
    }
    componentDidUpdate(prevProps){
        const {error,isAuthenticated,isAuthAdmin,auth,isAuthHost} = this.props;
        if(error!==prevProps.error){
            //check for register error
            if(error.id==='LOGIN_FAIL'){
                this.setState({msg:error.msg.msg})
            } else{
                this.setState({msg:null})
            }
        }
            ;
            if(isAuthenticated&&!isAuthAdmin&&!isAuthHost)
                        {this.props.history.push('/user')}   
            if(isAuthHost&&!isAuthAdmin){
                        this.props.history.push('/host')};    
            if(isAuthAdmin&&isAuthenticated){
                        this.props.history.push('/admin')}
        
    }

     ;
     onChange=(e)=>{
         this.setState({[e.target.name]:e.target.value})
     }
     onSubmit=(e)=>{
         e.preventDefault();
         const {email,password} = this.state;
         const user={
             email,
             password
         }
         //attempt login
         this.props.login(user)
         
         
     };

     render (){
         return(
            
                <div style={{marginTop:"5%",marginBottom:"5%",marginLeft:"35%"}}>
                <MDBRow>
                <MDBCol md="6">
                    <MDBCard>
                        <MDBCardBody>
                        <MDBCardHeader className="form-header deep-blue-gradient rounded">
                        <h3 className="my-3">
                        <MDBIcon icon="lock" /> Login:
                        </h3>
                        </MDBCardHeader>
                    {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>):null}
                        <Form onSubmit ={this.onSubmit}>
                            <FormGroup>
                                <Label for ='email'>Email</Label>
                                <MDBInput type='email'
                                className='mb-3'
                                name='email'
                                id='email'
                                placeholder='email'
                                onChange={this.onChange}/>

                                <Label for ='password'>password</Label>
                                <MDBInput type='password'
                                name='password'
                                className='mb-3'
                                id='passwors'
                                placeholder='password'
                                onChange={this.onChange}/>
                                <MDBBtn
                                color="light-blue"
                                className="mb-3"
                                type="submit"
                                >
                                Login
                                </MDBBtn>
                            </FormGroup>
                        </Form>
                        </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                </div>
         )
     }

 }

 const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated,
    isAuthAdmin:state.auth.isAuthAdmin,
    isAuthHost:state.auth.isAuthHost,
    error:state.error,
    auth:state.auth
})

 export default connect(mapStateToProps,{login,clearErrors})(LoginModal)