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
import {addItem,getItems} from '../../actions/itemActions';
import PropTypes from 'prop-types';


 class HostLocation extends Component{
     state={
         maison_dhote:'',
         sector:'',
         num:'',
         email:'',
         website:'',
         governorate:'',
         image:'',
         state:'pending',
         ready:false
     };
     static propTypes={
        getItems:PropTypes.func.isRequired,
        item:PropTypes.object.isRequired,
         isAuthenticated:PropTypes.bool,
         addItem:PropTypes.func.isRequired
     }
     componentDidMount(id){
        this.props.getItems(id);
    }
     componentDidUpdate(prevProps){
         if(this.state.ready){
        
          this.props.history.push(`newHost/${this.state.num}`)}

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
         formdata.append('state',this.state.state)
         formdata.append('image',this.state.image)
         

         this.props.addItem(formdata)
         this.setState({
            ready:true
        })
     }

     render(){
        const {items}=this.props.item;
        console.log(items)
        console.log(this.props)
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
                            <Input type="file" name="image" id="image" placeholder="Enter an image URL" onChange={this.onChangeImage} />
                            </FormGroup>
                        <Button>Submit</Button>
                    </Form>
            
         )
     }
    }

    const mapStateToProps=state=>({
      item:state.item,
      location:state.location,
      isAuthenticated:state.auth.isAuthenticated
  })

 export default connect(mapStateToProps,{getItems,addItem})(HostLocation)