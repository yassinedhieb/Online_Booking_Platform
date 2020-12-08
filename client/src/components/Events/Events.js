import React, { Component,useState } from 'react';

import { Card,Form, Col,Row } from 'react-bootstrap';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getEvents} from '../../actions/eventActions';
import PropTypes from 'prop-types';


class Events extends Component{
    state={
        search:''
    }
    static propTypes={
        getEvents:PropTypes.func.isRequired,
        item:PropTypes.object.isRequired,
        isAuthenticated:PropTypes.bool
        // ,deleteItem:PropTypes.func.isRequired
    }

    componentDidMount(){
        this.props.getEvents();
    }

    // onDeleteClick=(id)=>{
        
    //     this.props.deleteItem(id)
    // }
    handleSearch = (e) => {
        e.preventDefault()
        this.setState({search:e.target.value})

    }

    render() {
        const {events}=this.props.event;
        console.log(events)
        return (
        <div>    
            
                
                <MDBView src="https://img.lovepik.com//back_pic/05/75/68/935bdfbaba0ea6c.jpg_wh860.jpg">
                <MDBMask overlay="indigo-slight" className="flex-center flex-column text-white text-center">
                <h2 style={{fontSize:"700%"}}> Are You Readyyy!</h2>
                    {/* <div style={{paddingTop:'20px', paddingLeft:'30px', paddingRight:'30px'}}> */}
                <Form.Control size="lg" type="text" placeholder="Search" width="100px" style={{borderRadius:"30px"}} onInput={this.handleSearch} />
                    {/* </div> */}
                
                </MDBMask>
                </MDBView>
                <MDBCard className="my-5 px-5 pb-5">
                <MDBCardBody className="text-center">
                
        
        <MDBRow>
            {events.filter(el => el.name.toUpperCase().includes(this.state.search.toUpperCase())).map(el =>
                    
                        <MDBView style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                        
                        <div style={{display:'flex'}}> 
                       
                            <img
                            className="img-fluid"
                            src={`/image/${el.image[0]}`}
                            
                            alt=""
                            style={{height:"600px" ,width:'400px'}} 
                        />
                        <img
                            className="img-fluid"
                            src={`/image/${el.image[1]}`}
                            
                            alt=""
                            style={{height:"600px" ,width:'400px'}} 
                        /></div>
                        
                        <MDBMask  overlay="indigo-slight" className="flex-center flex-column text-white text-center" >
                        <h2 className="font-weight-bold mb-3">
                        <strong>{el.name}</strong>
                        </h2>
                        <a href="#!">
                        <h3>
                            
                            {el.discription},{el.date}
                        </h3>
                        </a>
                        
                        </MDBMask>
                        </MDBView>
                        
                    
            )}
        </MDBRow>
        </MDBCardBody>
    </MDBCard>
    </div>        
        );
      }
}



const mapStateToProps=(state)=>({
    event:state.event,
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps,{getEvents})(Events);