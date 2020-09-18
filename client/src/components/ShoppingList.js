import React, { Component,useState } from 'react';
import './../App.css'
import { Card,Form, Col,Row } from 'react-bootstrap';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions'
import PropTypes from 'prop-types';

class ShoppingList extends Component{
    state={
        search:''
    }
    static propTypes={
        getItems:PropTypes.func.isRequired,
        item:PropTypes.object.isRequired,
        isAuthenticated:PropTypes.bool,
        deleteItem:PropTypes.func.isRequired
    }

    componentDidMount(id){
        this.props.getItems(id);
    }

    onDeleteClick=(id)=>{
        
        this.props.deleteItem(id)
    }
    handleSearch = (e) => {
        e.preventDefault()
        this.setState({search:e.target.value})

    }

    render() {
        const {items}=this.props.item;
        console.log(items)
        return (
        <div>    
            <MDBCard className="my-5 px-5 pb-5">
                <MDBCardBody className="text-center">
                <div style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2017/06/26/17/33/tunisia-2444524_960_720.jpg)",height:'400px',width:'900px', marginLeft:"180px" }}>
                <h2 className="h1-responsive font-weight-bold text-center my-5" style={{paddingTop:'50px'}}> Prepare yourself for an adventure!</h2>
                    <div style={{paddingTop:'20px', paddingLeft:'30px', paddingRight:'30px'}}>
                <Form.Control size="lg" type="text" placeholder="Search" width="100px" style={{borderRadius:"30px"}} onInput={this.handleSearch} />
                    </div>
                </div>
        <br/>
        <MDBRow>
            {items.filter(el => el.maison_dhote.toUpperCase().includes(this.state.search.toUpperCase())).map(el =>
                    <MDBCol lg="4" md="12" className="mb-lg-0 mb-4"  className="cardTag">
                        <MDBView hover className="rounded z-depth-2 mb-4" waves>
                        <img
                            className="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/81.jpg"
                            alt=""
                        />
                        <MDBMask overlay="white-slight" />
                        </MDBView>
                        <a href="#!" className="pink-text">
                        <h6 className="font-weight-bold mb-3">
                            <MDBIcon icon="map" className="pr-2" />
                            {el.governorate},{el.sector}
                        </h6>
                        </a>
                        <h4 className="font-weight-bold mb-3">
                        <strong>{el.maison_dhote}</strong>
                        </h4>
                        <p>
                        by <a href="#!" className="font-weight-bold">Billy Forester</a>,
                        15/07/2018
                        </p>
                        <p className="dark-grey-text">
                        {el.num? `Num:${el.num}`:null}</p>
                        <p className="dark-grey-text">
                        {el.email? `Email:${el.email}`:null}
                        </p>
                        <MDBBtn href={el.website} color="pink" rounded size="md">
                        Read more
                        </MDBBtn>
                        <MDBBtn color="danger" onClick={()=>this.onDeleteClick(el._id)} rounded size="md">
                        DELETE
                        </MDBBtn>
                        <Link to={"/edit/"+el._id}>edit</Link>
                    </MDBCol>
            )}
        </MDBRow>

        </MDBCardBody>
    </MDBCard>
    </div>        
        );
      }
}



const mapStateToProps=(state)=>({
    item:state.item,
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps,{getItems,deleteItem})(ShoppingList);