import React,{Component}  from 'react';
// import logo from "../assets/mdb-react.png";
import { MDBListGroup, MDBListGroupItem, MDBIcon,MDBBtn } from 'mdbreact';
import { NavLink } from 'react-router-dom';
import {Link} from 'react-router-dom';
import {getItems,deleteItem} from '../actions/itemActions'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class SideNavigation extends Component{
    static propTypes={
        getItems:PropTypes.func.isRequired,
        item:PropTypes.object.isRequired,
        isAuthenticated:PropTypes.bool,
    }
    componentDidMount(id){
        this.props.getItems(id);
    }
    render() {
        const {ref}=this.props.user
        const {items}=this.props.item;
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                {/* <img alt="MDB React Logo" className="img-fluid" src={logo}/> */}
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/host" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/host/profile" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/host/data" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Data
                    </MDBListGroupItem>
                </NavLink>
    {items.filter(el => el._id==ref).map(el =>
      <div>
        <NavLink to={{
                            pathname: "/host/reservations/"+el._id,
                            state: {
                                sector: el.sector,
                                governorate:el.governorate,
                                maison_dhote:el.maison_dhote,
                                num:el.num,
                                email:el.email,
                                website:el.website,
                                image:el.image
                            }
                            }}><MDBListGroupItem>
                            <MDBIcon icon="table" className="mr-3"/>
                            Bookings
                        </MDBListGroupItem></NavLink>
               
                    
        </div>)}
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        404
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}}
const mapStateToProps=(state)=>({
    item:state.item,
    isAuthenticated:state.auth.isAuthenticated,
    user:state.auth.user
  });
export default connect(mapStateToProps,{getItems,deleteItem})(SideNavigation);
