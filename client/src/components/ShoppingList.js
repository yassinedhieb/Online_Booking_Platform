import React, { Component,useState } from 'react';
import './../App.css'
import { Card,Form, Col,Row } from 'react-bootstrap';
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions'
import PropTypes from 'prop-types';
import itemDetails from '../components/itemDetails';

class ShoppingList extends Component{
    state={
        search:'',
        governorate:'',
        sector:''

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
            
                
                <MDBView src="https://cdn.pixabay.com/photo/2017/06/26/17/33/tunisia-2444524_960_720.jpg">
                <MDBMask overlay="indigo-slight" className="flex-center flex-column text-white text-center">
                <h2> Prepare yourself for an adventure!</h2>
                    {/* <div style={{paddingTop:'20px', paddingLeft:'30px', paddingRight:'30px'}}> */}
                <Form.Control size="lg" type="text" placeholder="Search" width="100px" style={{borderRadius:"30px"}} onInput={this.handleSearch} />
                    {/* </div> */}
                
                </MDBMask>
                </MDBView>
                <MDBCard className="my-5 px-5 pb-5">
                <MDBCardBody className="text-center">
                
        <br/>
        
                        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around'}}>
                        <label>
                            {" "}
                            Filter Governorate
                            <select
                            className="form-control"
                            onChange={(event) => {
                                this.setState({governorate:event.target.value})
                            }}
                            >
                            {console.log(this.state.governorate)}
                            <option value="">All</option>
                            <option value="Bizerte">Bizerte</option>
                            <option value="Jandouba">Jandouba</option>
                            <option value="Kairouan">Kairouan</option>
                            {/* <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option> */}
                            </select>
                        </label>
                        
                    
                        <label>
                            {" "}
                            Filter Governorate
                            <select
                            className="form-control"
                            onChange={(event) => {
                                this.setState({sector:event.target.value})
                            }}
                            >
                            {console.log(this.state.governorate)}
                            <option value="">All</option>
                            <option value="Nord West">Nord West</option>
                            <option value="Centre West">Centre West</option>
                            {/* <option value="m">M</option>
                            <option value="l">L</option>
                            <option value="xl">XL</option>
                            <option value="xxl">XXL</option> */}
                            </select>
                        </label>
                   </div>
                    
        <MDBRow>
            {items.filter(el => el.maison_dhote.toUpperCase().includes(this.state.search.toUpperCase())).filter(el => el.governorate.toUpperCase().includes(this.state.governorate.toUpperCase())).filter(el => el.sector.toUpperCase().includes(this.state.sector.toUpperCase())).map(el =>
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
                        <MDBBtn color="pink" rounded size="md">
                        <Link to={"/user/itemDetails/"+el._id}>
                        Read more
                        </Link>
                        </MDBBtn>
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