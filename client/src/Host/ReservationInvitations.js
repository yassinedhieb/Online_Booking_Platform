import React, { Component,useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getReservations} from '../actions/reservationsActions'
import PropTypes from 'prop-types';


class reservationInvitations extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ID : this.props.match.params.id
        };
    }
    static propTypes={
        getReservations:PropTypes.func.isRequired,
        reservation:PropTypes.object.isRequired,
        isAuthenticated:PropTypes.bool,
        LocationRef:PropTypes.string
    }

    componentDidMount(id){
        this.props.getReservations(id);
        
    }

    // onDeleteClick=(id)=>{
    //     this.props.deleteItem(id)
    // }
    // handleSearch = (e) => {
    //     e.preventDefault()
    //     this.setState({search:e.target.value})

    // }
    

    render() {
        const {reservations}=this.props.reservation;
       console.log(reservations)
        return (
        <div style={{marginLeft:'10%',marginRight:'10%',marginTop:'5%',marginBottom:'10%'}}>
            <MDBTable style={{width:"100%",fontSize:'100%'}} >
            <MDBTableHead>
              <tr >
                <th style={{fontSize:'150%'}}>CustomerName</th>
                <th style={{fontSize:'150%'}}>CustomerContact</th>
                <th style={{fontSize:'150%'}}>booked Day</th>
               
              </tr>
            </MDBTableHead>
                  
            
            {reservations.filter(el => el.LocationRef==this.state.ID).map(el =>
            <MDBTableBody>
            <tr>
            <td style={{fontSize:'150%'}}>{el.CustomerName}</td>
              <td style={{fontSize:'150%'}}>{el.CustomerContact}</td>
            <td style={{fontSize:'150%'}}>{el.bookedDay}</td>
            </tr>
          </MDBTableBody>)}
          </MDBTable>

            
        </div>       
        );
      }
}



const mapStateToProps=(state)=>({
    item:state.item,
    isAuthenticated:state.auth.isAuthenticated,
    user:state.auth.user,
    reservation:state.reservation
});

export default connect(mapStateToProps,{getReservations})(reservationInvitations);