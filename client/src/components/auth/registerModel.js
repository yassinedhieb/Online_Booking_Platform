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


import {connect} from 'react-redux';
import PropTypes from 'prop-types'
import {register} from '../../actions/authActions';
import{clearErrors} from '../../actions/errorActions';


 class RegisterModel extends Component{
     state={
         modal:false,
         name:'',
         email:'',
         password:'',
         msg:null
     };

    static propTypes={
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        register:PropTypes.func.isRequired,
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
        const {error,isAuthenticated} = this.props;
        if(error!==prevProps.error){
            //check for register error
            if(error.id==='REGISTER_FAIL'){
                this.setState({msg:error.msg.msg})
            } else{
                this.setState({msg:null})
            }
        }
        if(this.state.modal){
            if(isAuthenticated){
                this.toggle();
            }
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
             email:this.state.email,
             password:this.state.password
         }
         this.props.register(newUser);
     };

     render (){
         return(
             <div>
                 <NavLink onClick={this.toggle} href="#">
                     Register
                 </NavLink>
                 <Modal isOpen={this.state.modal}
                     toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
         {this.state.msg ? (<Alert color='danger'>{this.state.msg}</Alert>):null}
                        <Form >
                            <FormGroup>
                                <Label for ="item">Name</Label>
                                <Input type='text'
                                className='mb-3'
                                name='name'
                                id='name'
                                placeholder='name'
                                onChange={this.onChange}/>

                                <Label for ='email'>Email</Label>
                                <Input type='email'
                                className='mb-3'
                                name='email'
                                id='email'
                                placeholder='email'
                                onChange={this.onChange}/>

                                <Label for ='password'>password</Label>
                                <Input type='password'
                                name='password'
                                className='mb-3'
                                id='passwors'
                                placeholder='password'
                                onChange={this.onChange}/>
                                <Button color="dark"
                                style={{marginTop:'2rem'}} block onClick={this.onSubmit}>Register</Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                     
                 </Modal>
             </div>
         )
     }

 }

 const mapStateToProps=state=>({
    isAuthenticated:state.auth.isAuthenticated,
    error:state.error    
})

 export default connect(mapStateToProps,{register,clearErrors})(RegisterModel)