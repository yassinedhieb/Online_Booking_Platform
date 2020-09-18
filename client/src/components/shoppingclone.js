import React, { Component } from 'react';

import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions'
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap'

class ShoppingList extends Component{
    static propTypes={
        getItems:PropTypes.func.isRequired,
        item:PropTypes.object.isRequired,
        isAuthenticated:PropTypes.bool
    }

    componentDidMount(id){
        this.props.getItems(id);
    }

    onDeleteClick=(id)=>{
        this.props.deleteItem(id)
    }

    render() {
        const {items}=this.props.item;
        return (
          
            <div>
          {items.map((d) =>(
            <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src="https://images.squarespace-cdn.com/content/v1/5ae7f97a9772ae4ce53566b2/1554356845910-EI2ZVHJRKOSPJAHCUAI1/ke17ZwdGBToddI8pDm48kMXRibDYMhUiookWqwUxEZ97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0luUmcNM2NMBIHLdYyXL-Jww_XBra4mrrAHD6FMA3bNKOBm5vyMDUBjVQdcIrt03OQ/ANNIHILATION+poster_smaller.jpg"height="300px" />
                    <Card.Body>
                        <Card.Title>{d.maison_dhote}</Card.Title>
                    </Card.Body> 
                    {this.props.isAuthenticated?<Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this,d._id)}>&times;</Button>:null}
            </Card>))}
            </div>
            
        );
      }
}



const mapStateToProps=(state)=>({
    item:state.item,
    isAuthenticated:state.auth.isAuthenticated
});

export default connect(mapStateToProps,{getItems,deleteItem})(ShoppingList);