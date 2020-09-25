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
import {addItem} from '../actions/itemActions';
import PropTypes from 'prop-types';


 class ItemModal extends Component{
     state={
         maison_dhote:'',
         sector:'',
         num:'',
         email:'',
         website:'',
         governorate:'',
         image:''
     };
     static propTypes={
         isAuthenticated:PropTypes.bool,
         addItem:PropTypes.func.isRequired
     }
     
     onChangeMaison=(e)=>{
         this.setState({
             maison_dhote:e.target.value
         })
     }
     onChangeSector=(e)=>{
        this.setState({
            sector:e.target.value
        })
    }
    onChangeGovernorate=(e)=>{
        this.setState({
            governorate:e.target.value
        })
    }
    onChangeWebsite=(e)=>{
        this.setState({
            website:e.target.value
        })
    }
    onChangeImage=(e)=>{
        this.setState({
            image:e.target.value
        })
    }
    onChangeEmail=(e)=>{
        this.setState({
            email:e.target.value
        })
    }
    onChangeNum=(e)=>{
        this.setState({
            num:e.target.value
        })
    }
     onSubmit=(e)=>{
         e.preventDefault()
         const newLocation={
            
                sector:this.state.sector,
                governorate:this.state.governorate,
                maison_dhote:this.state.maison_dhote,
                num:this.state.num,
                email:this.state.email,
                website:this.state.website,
                image:this.state.image
         }

         this.props.addItem(newLocation)
     }

     render(){
         console.log('hello additem')
         return (        
                 <Form onSubmit ={this.onSubmit}>
                        <FormGroup>
                            <Label for="sector">Sector</Label>
                            <Input type="text" name="sector" id="sector" placeholder="Enter a sector" onChange={this.onChangeSector} />
                            </FormGroup>
                            <FormGroup>
                            <Label for="governorate">Governorate</Label>
                            <Input type="text" name="governorate" id="governorate" placeholder="Enter a governorate" onChange={this.onChangeGovernorate} />
                            </FormGroup>
                            <FormGroup>
                            <Label for="maison_dhote">Maison d'hote</Label>
                            <Input type="text" name="maison_dhote" id="maison_dhote" placeholder="Enter Your a Name" onChange={this.onChangeMaison} />
                            </FormGroup>
                            <FormGroup>
                            <Label for="num">Number</Label>
                            <Input type="number" name="num" id="num" placeholder="Enter a Number" onChange={this.onChangeNum} />
                            </FormGroup>
                            <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter Your Email" onChange={this.onChangeEmail} />
                            </FormGroup>
                            <FormGroup>
                            <Label for="website">Website</Label>
                            <Input type="text" name="website" id="website" placeholder="Enter a website" onChange={this.onChangeWebsite} />
                            </FormGroup>
                            <FormGroup>
                            <Label for="image">Image</Label>
                            <Input type="text" name="image" id="image" placeholder="Enter an image URL" onChange={this.onChangeImage} />
                            </FormGroup>
                        <Button>Submit</Button>
                    </Form>
            
         )
     }
    }

    const mapStateToProps=state=>({
      location:state.location,
      isAuthenticated:state.auth.isAuthenticated
  })

 export default connect(mapStateToProps,{addItem})(ItemModal)