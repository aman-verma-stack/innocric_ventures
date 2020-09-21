import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class CartComponent extends Component{
    render(){
        return(
            <FontAwesomeIcon icon={faShoppingCart} />
        )
    }
}


export default CartComponent;