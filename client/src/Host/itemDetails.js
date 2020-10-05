import React, { Component,useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { MDBContainer,MDBCarousel,MDBCarouselInner,MDBCarouselCaption,MDBCarouselItem,MDBView,MDBMask } from 'mdbreact';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions'
import PropTypes from 'prop-types';
import Weather from '../components/Weather/Weather';
import Calendar from '../components/Calendar/Calendar'

class itemDetails extends Component{
    static propTypes={
        getItems:PropTypes.func.isRequired,
        item:PropTypes.object.isRequired,
        isAuthenticated:PropTypes.bool,
        ref:PropTypes.string
    }

    componentDidMount(id){
        this.props.getItems(id);
        
    }

    // onDeleteClick=(id)=>{
    //     this.props.deleteItem(id)
    // }
    handleSearch = (e) => {
        e.preventDefault()
        this.setState({search:e.target.value})

    }
    

    render() {
        const {items}=this.props.item;
        const {ref}=this.props.user;
       
        return (
        <div>
            
                  
            {console.log(ref)}
            {items.filter(el => el._id==ref).map(el =>
            <div>
            <MDBContainer>
            <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg"
                    alt="First slide"
                  />
                <MDBMask overlay="black-light" />
                </MDBView>
                <MDBCarouselCaption>
                <Weather city={el.governorate}/>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(6).jpg"
                    alt="Second slide"
                  />
                <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                <Weather city={el.governorate}/>
                </MDBCarouselCaption>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(9).jpg"
                    alt="Third slide"
                  />
                <MDBMask overlay="black-slight" />
                </MDBView>
                <MDBCarouselCaption>
                <Weather city={el.governorate}/>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
          
            
            
                
                {/* <div style={{display:'flex',flexDirection:'row',flexWrap:'nowrap',width:'950px',height:'500px'}}>
                        <CardImg top width="100%" src="https://a0.muscache.com/im/pictures/be088744-346c-4b1a-91d1-48897e574aac.jpg?im_w=960"/>
                        <CardImg top width="100%" src="https://a0.muscache.com/im/pictures/16fea361-a3d1-42e1-8595-73a0b563b47f.jpg?im_w=1200"/>
                        <CardImg top width="100%" src="https://a0.muscache.com/im/pictures/e94039b7-fefa-4410-9d05-1feaceddcac5.jpg?im_w=1200"/>
              </div> */}
              
             
                <h1>{el.maison_dhote}</h1>
                <h3>Spots</h3>
                <h2>Contact</h2>{el.num? `Num:${el.num}`:null},{el.email? `Email:${el.email}`:null}.
                <p>Description</p>
                <h1>Sleeping arrangements</h1>
                <p>Description</p>
                <h1>Availability</h1>
                <div style={{paddingLeft:'15%'}}>
                  <Calendar/>
                </div>
                <p>Description</p>
                <h1>Location</h1>
                  <div
                    id="map-container"
                    className="rounded z-depth-1-half map-container"
                    style={{ height: "400px" }}
                  >
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6789343.066898607!2d5.066425381767909!3d33.80950217772952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2stn!4v1600348761072!5m2!1sen!2stn" width="100%" height="100%" frameborder="0" style={{border:"0px"}}allowfullscreen="" aria-hidden="false" tabindex="0"/>
                    
                  </div>
                <h1>Activities</h1>

                </MDBContainer>
             
            </div>)}
            
            
        </div>       
        );
      }
}



const mapStateToProps=(state)=>({
    item:state.item,
    isAuthenticated:state.auth.isAuthenticated,
    user:state.auth.user
});

export default connect(mapStateToProps,{getItems,deleteItem})(itemDetails);