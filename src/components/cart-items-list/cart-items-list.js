import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from './../universal-elements/universal-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toCart } from './../../actions/toCart';

import './cart-items-list.css';

class CartItemsList extends Component {
    render() {
        const { cartItems, count, sum, toCart } = this.props;
        if(!cartItems.length) {
            return(
                <h3 className="cart-items-list__empty">
                    There is nothing in a cart yet...
                </h3>
            )
        }
        return(
            <div className="cart-items-list">
                <h1 className="cart-items-list__title">
                    Cart:
                </h1>
                <ul className="cart-items-list__list">
                    {cartItems.map(item => {
                        return(
                            <li key={`cart-${item.id}`} className="cart-items-list__item">
                                <div className="cart-items-list__con">
                                    <p className="cart-items-list__text">
                                        {item.title}  
                                    </p>
                                    <p className="cart-items-list__text">
                                        Price: {item.price}&euro;
                                    </p>
                                    <p className="cart-items-list__text">
                                        Count: {item.itemCount}
                                    </p>
                                </div>
                                <div className="cart-items-list__con">
                                    <Button 
                                        className="cart-items-list__btn-green"
                                        onClick={() => {toCart({title: item.title, id: item.id, price: item.price})}}
                                    >
                                        <FontAwesomeIcon icon={faPlus} />
                                    </Button>
                                    <Button className="cart-items-list__btn-red">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="cart-items-list__con2">
                    <p className="cart-items-list__text">
                        Items in total: {count}
                    </p>
                    <p className="cart-items-list__text">
                        Price in total: {sum}&euro;
                    </p>
                    <Button className="cart-items-list__btn-order">
                        Make an order!
                    </Button>
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = ({ cartReducer: { cartItems, count, sum } }) => {
    return { cartItems, count, sum };
}

export default connect(mapStateToProps, { toCart })(CartItemsList);