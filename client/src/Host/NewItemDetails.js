import React,{Component} from "react";
import { MDBRow, MDBCol, MDBIcon, MDBCarouselInner,MDBCarouselItem,MDBView,MDBMask,MDBCarouselCaption,MDBCarousel, MDBBtn} from "mdbreact";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions'
import PropTypes from 'prop-types';
import Weather from '../components/Weather/Weather';
import Calendar from '../components/Calendar/Calendar'

class NewItemDetails extends Component{
  constructor(props) {
    super(props);
    this.state = {
        ID : this.props.match.params.id
    };
}
    static propTypes={
        getItems:PropTypes.func.isRequired,
        item:PropTypes.object.isRequired,
        isAuthenticated:PropTypes.bool,
    }

    componentDidMount(id){
        this.props.getItems(id);
    }
render() {
  const {items}=this.props.item;
  const {ref}=this.props.user;
  return (
    <section className="my-5">
      {items.filter(el => el._id==ref).map(el =>
      <div>
        <MDBBtn><Link to={{
                            pathname: "/host/editlocation/"+el._id,
                            state: {
                              sector: el.sector,
                              governorate:el.governorate,
                              maison_dhote:el.maison_dhote,
                              num:el.num,
                              email:el.email,
                              website:el.website,
                              clicks:el.clicks,
                              image:el.image
                          }
                            }}>edit</Link></MDBBtn>
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
                <Weather city={el.governorate} maison_dhote={el.maison_dhote}/>
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
      <div style={{margin:'5%'}}>
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Why is it so great?
        </h2>
      <p className="lead grey-text w-responsive text-center mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        ad minim veniam.
        </p>

      <MDBRow>
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon
                icon="flag-checkered"
                size="2x"
                className="deep-purple-text"
              />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Contact</h5>
              <p className="grey-text">
              {el.num? `Num :${el.num}`:null} </p>
              <p className="grey-text">
                {el.email? `Email :${el.email}`:null}
                </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="flask" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Experimental</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                hic.
                </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="glass-martini" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Relaxing</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                hic.
                </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol md="4" className="text-name">
        <div
                    id="map-container"
                    className="rounded z-depth-1-half map-container"
                    style={{ height: "400px" }}
                  >
                    
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6789343.066898607!2d5.066425381767909!3d33.80950217772952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x125595448316a4e1%3A0x3a84333aaa019bef!2sTunisia!5e0!3m2!1sen!2stn!4v1600348761072!5m2!1sen!2stn" width="100%" height="100%" frameborder="0" style={{border:"0px"}}allowfullscreen="" aria-hidden="false" tabindex="0"/>
                    
                  </div>
        </MDBCol>
        <MDBCol md="4">
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="heart" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Views</h5>
              <p className="grey-text">
              {el.clicks}
                </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="bolt" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Views</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                hic.
                </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mb-3">
            <MDBCol size="2">
              <MDBIcon icon="magic" size="2x" className="deep-purple-text" />
            </MDBCol>
            <MDBCol size="10">
              <h5 className="font-weight-bold mb-3">Magical</h5>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reprehenderit maiores nam, aperiam minima assumenda deleniti
                hic.
                </p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
      
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Ready to experience?
        </h2>
        <div style={{paddingLeft:'36%'}}>
        <Calendar/>
        </div>
      </div>
      </div>)}
    </section>
  );
}}

const mapStateToProps=(state)=>({
  item:state.item,
  isAuthenticated:state.auth.isAuthenticated,
  user:state.auth.user
});

export default connect(mapStateToProps,{getItems,deleteItem})(NewItemDetails);
