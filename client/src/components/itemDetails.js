import React, { Component,useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';
import { UncontrolledCarousel } from 'reactstrap';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions'
import PropTypes from 'prop-types';
import Weather from './Weather/Weather'

class itemDetails extends Component{
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

    // onDeleteClick=(id)=>{
    //     this.props.deleteItem(id)
    // }
    handleSearch = (e) => {
        e.preventDefault()
        this.setState({search:e.target.value})

    }
    
    images = [
        {
          src: 'https://a0.muscache.com/im/pictures/be088744-346c-4b1a-91d1-48897e574aac.jpg?im_w=960',
          altText: 'Slide 1',
          key: '1'
        },
        {
          src: 'https://a0.muscache.com/im/pictures/16fea361-a3d1-42e1-8595-73a0b563b47f.jpg?im_w=1200',
          altText: 'Slide 2',
        //   caption: 'Slide 2',
        //   header: 'Slide 2 Header',
          key: '2'
        },
        {
          src: 'https://a0.muscache.com/im/pictures/e94039b7-fefa-4410-9d05-1feaceddcac5.jpg?im_w=1200',
          altText: 'Slide 3',
          key: '3'
        }
      ];

    render() {
        const {items}=this.props.item;
        return (
        <div>
            <div style={{marginTop:'60px'}}>
            <UncontrolledCarousel items={this.images}/>
            </div>
            {items.filter(el => el._id==this.state.ID).map(el =>
            <Card style={{marginTop:'100px'}}>
                
                {/* <div style={{display:'flex',flexDirection:'row',flexWrap:'nowrap',width:'950px',height:'500px'}}>
                        <CardImg top width="100%" src="https://a0.muscache.com/im/pictures/be088744-346c-4b1a-91d1-48897e574aac.jpg?im_w=960"/>
                        <CardImg top width="100%" src="https://a0.muscache.com/im/pictures/16fea361-a3d1-42e1-8595-73a0b563b47f.jpg?im_w=1200"/>
                        <CardImg top width="100%" src="https://a0.muscache.com/im/pictures/e94039b7-fefa-4410-9d05-1feaceddcac5.jpg?im_w=1200"/>
              </div> */}
              <CardBody>
                <CardTitle>{el.maison_dhote}</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>{el.num? `Num:${el.num}`:null},{el.email? `Email:${el.email}`:null}.</CardText>
                <Button>Button</Button>
              </CardBody>
              <Weather city={el.governorate}/>
            </Card>)}
            
            
        </div>       
        );
      }
}



const mapStateToProps=(state)=>({
    item:state.item,
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps,{getItems,deleteItem})(itemDetails);