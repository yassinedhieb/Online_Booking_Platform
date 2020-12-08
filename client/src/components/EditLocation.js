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
import {editItem} from '../actions/itemActions';
import PropTypes from 'prop-types';


 class ItemModal extends Component{
      state = {
        sector:this.props.history.location.state.sector,
        governorate:this.props.history.location.state.governorate,
        maison_dhote:this.props.history.location.state.maison_dhote,
        num:this.props.history.location.state.num,
        email:this.props.history.location.state.email,
        website:this.props.history.location.state.website,
        clicks:this.props.history.location.state.clicks,
        image:'',
    }
     static propTypes={
         isAuthenticated:PropTypes.bool,
         editItem:PropTypes.func.isRequired
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
    onChangeMaison=(e)=>{
        this.setState({
            maison_dhote:e.target.value
        })
    }
    onChangeWebsite=(e)=>{
        this.setState({
            website:e.target.value
        })
    }
    onChangeImage=(e)=>{
        this.setState({
            image:e.target.files[0]
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
         let formdata= new FormData()
         formdata.append('sector',this.state.sector)
         formdata.append('governorate',this.state.governorate)
         formdata.append('maison_dhote',this.state.maison_dhote)
         formdata.append('num',this.state.num)
         formdata.append('email',this.state.email)
         formdata.append('website',this.state.website)
         formdata.append('image',this.state.image)
         formdata.append('clicks',this.state.clicks)
        
         const id=this.props.match.params.id
        console.log(formdata)
         this.props.editItem(formdata,id)
     }

     render(){
         console.log(this.state.maison_dhote)
         return (        
                 <Form onSubmit ={this.onSubmit} style={{marginTop:'100px'}}>
                            <FormGroup>
                            <Label >Sector</Label>
                            <Input type="text"  value={this.state.sector} onChange={this.onChangeSector} />
                            </FormGroup>
                            <FormGroup>
                            <Label >Governorate</Label>
                            <Input type="text" value={this.state.governorate}  onChange={this.onChangeGovernorate} />
                            </FormGroup>
                            <FormGroup>
                            <Label>maison</Label>
                            <Input type="text" value={this.state.maison_dhote} onChange={this.onChangeMaison} />
                            </FormGroup>
                            <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" value={this.state.email} placeholder="Enter Your Email" onChange={this.onChangeEmail} />
                            </FormGroup>
                            <FormGroup>
                            <Label for="website">Website</Label>
                            <Input type="text" name="website" id="website" value={this.state.website} placeholder="Enter a website" onChange={this.onChangeWebsite} />
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
      location:state.location,
      isAuthenticated:state.auth.isAuthenticated
  })

 export default connect(mapStateToProps,{editItem})(ItemModal)