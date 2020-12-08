import React,{Component,Fragment} from "react";
import { MDBRow, MDBCol, MDBIcon, MDBCarouselInner,MDBCarouselItem,MDBView,MDBMask,MDBCarouselCaption,MDBCarousel, MDBBtn} from "mdbreact";
import {
  Label,
  Input,
  Form,
  Button
} from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions'
import PropTypes from 'prop-types';
import Weather from '../components/Weather/Weather';
import Calendar from 'react-calendar';
import axios from 'axios';
import { saveAs } from 'file-saver';
import {addImage,getImages} from '../actions/imageActions';



class NewItemDetails extends Component{
  constructor(props) {
    super(props);
    this.state = {
        ID : this.props.match.params.id,
        el:{},
        user:{},
        date: new Date(),
        resDate:"",
        confimred:false,
        image:"",
        ItemImages:[],
        update:false
    };
}
    static propTypes={
        getItems:PropTypes.func.isRequired,
        item:PropTypes.object.isRequired,
        isAuthenticated:PropTypes.bool,
        auth:PropTypes.object.isRequired
    }
    onChange = date => this.setState({ resDate:`${date.getDate()}. ${date.getMonth() + 1}. ${date.getFullYear()}.` })

    addImage=(e)=>{
      this.setState({
          image:e.target.files[0]
      })
    }
    onSubmit=(e)=>{
      e.preventDefault()
      let formdata= new FormData()
  
      formdata.append('ref',this.state.ID)
      formdata.append('image',this.state.image)
      

      this.props.addImage(formdata)
  }


    createAndDownloadPdf = () => {
     
      console.log(this.state)
      axios.post('/api/reservations/create-pdf', this.state)
        .then(() => axios.get('/fetch-pdf', { responseType: 'blob' }))
        .then((res) => {
          const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
  
          saveAs(pdfBlob, 'newPdf.pdf');
        })
    }

    componentDidMount(id){
        this.props.getItems(id);
        this.props.getImages();
        
    }
    
render() {
  const {items}=this.props.item;
  const {images}=this.props.image;
  const {isAuthAdmin,user}=this.props.auth;
  console.log(images.filter(el => el.ref==this.state.ID).length)

  const authLinks=(
    <Fragment>
          <Form onSubmit ={this.onSubmit}>
          <Label for="image">Image</Label>
                            <Input type="file" name="image" id="image" placeholder="Enter an image" onChange={this.addImage} />
          <Button>Submit</Button>
          </Form>
    </Fragment>
    );
  
  const confirmed=(
    <Fragment>
        <MDBBtn onClick={()=>{
          this.createAndDownloadPdf()}}>Download Resrvation</MDBBtn>
    </Fragment>
    );
  

  return (
    <section className="my-5">
      {items.filter(el => el._id==this.state.ID).map(el =>
      <div>
        {images.filter(el => el.ref==this.state.ID).length!=0?
        
        <div>
         
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
                    src={`/image/${images.filter(el=>el.ref==this.state.ID)[0].image}`}
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
                    src={`/image/${images.filter(el=>el.ref==this.state.ID)[1].image}`}
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
                    src={`/image/${images.filter(el=>el.ref==this.state.ID)[2].image}`}
                    alt="Second slide"
                  />
                <MDBMask overlay="black-strong" />
                </MDBView>
                <MDBCarouselCaption>
                <Weather city={el.governorate}/>
                </MDBCarouselCaption>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
          </div>:null}
          <div style={{marginTop:"5%",display:"flex",justifyContent:"center"}}>
          {isAuthAdmin? authLinks:null}
          </div>
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
          
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
        {this.state.resDate}
        <MDBBtn onClick={()=>{this.setState({el:el})
      this.setState({user:user})
      this.setState({confirmed:true})}}>Confirm</MDBBtn>
        {this.state.confirmed? confirmed:null}
        </div>
      </div>
      </div>)}
    </section>
  );
}}

const mapStateToProps=(state)=>({
  item:state.item,
  isAuthenticated:state.auth.isAuthenticated,
  auth:state.auth,
  image:state.image
});

export default connect(mapStateToProps,{getItems,deleteItem,addImage,getImages})(NewItemDetails);
