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
    FormText
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {addEvent} from '../actions/eventActions';
import PropTypes from 'prop-types';


 class AddEvent extends Component{
     state={
         name:'',
         discription:'',
         date:'',
         image:''
     };
     static propTypes={
         isAuthHost:PropTypes.bool,
         addEvent:PropTypes.func.isRequired,
     }
     
     onChangeName=(e)=>{
         this.setState({
             name:e.target.value
         })
     }
     onChangeDiscription=(e)=>{
        this.setState({
            discription:e.target.value
        })
    }
    onChangeDate=(e)=>{
        this.setState({
            date:e.target.value
        })
    }
    onChangeImage=(e)=>{
        this.setState({
            image:e.target.files[0]
        })
    }
    
     onSubmit=(e)=>{
         e.preventDefault()
         let formdata= new FormData()
         formdata.append('name',this.state.name)
         formdata.append('discription',this.state.discription)
         formdata.append('date',this.state.date)
         formdata.append('image',this.state.image)
         
            console.log(formdata)
         this.props.addEvent(formdata)
     }

     render(){
         console.log('hello addEvent')
         return (        
                 <Form onSubmit ={this.onSubmit}>
                        <FormGroup>
                            <Label for="name">name</Label>
                            <Input type="text" name="name" id="name" placeholder="Enter a name" onChange={this.onChangeName} />
                            </FormGroup>
                            <FormGroup>
                            <Label for="discription">discription</Label>
                            <Input type="text" name="discription" id="discription" placeholder="Enter a discription" onChange={this.onChangeDiscription} />
                            </FormGroup>
                            <FormGroup>
                            <Label for="date">date </Label>
                            <Input type="text" name="date" id="date" placeholder="Enter Your a date" onChange={this.onChangeDate} />
                            </FormGroup>
                            <FormGroup>
                            <Label for="image">Image</Label>
                            <Input type="file" name="image" id="image" placeholder="Enter an image URL" onChange={this.onChangeImage} />
                            </FormGroup>
                        <Button>Submit</Button>
                    </Form>
            
         )
     }
    }

    const mapStateToProps=state=>({
      event:state.event,
      isAuthHost:state.auth.isAuthHost  })

 export default connect(mapStateToProps,{addEvent})(AddEvent)