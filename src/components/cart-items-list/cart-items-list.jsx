import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../universal-elements/universal-button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { toCart } from '../../actions/toCart';
import { deleteFromCart } from '../../actions/deleteFromCart';
import PaymentForm from '../payment-form/payment-form';
import { StripeProvider, Elements } from 'react-stripe-elements';

import './cart-items-list.css';

class CartItemsList extends Component {
    render() {
        const { cartItems, count, sum, toCart, deleteFromCart } = this.props;
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
                                    <Button 
                                        className="cart-items-list__btn-red"
                                        onClick={() => {deleteFromCart({title: item.title, id: item.id, price: item.price})}}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                <div className="cart-items-list__con2">
                    <StripeProvider apiKey="pk_test_97ZfNkg9YKLbJ72I5oPfMLKx00Yg00yxqr">
                        <Elements>
                            <PaymentForm/>
                        </Elements>
                    </StripeProvider>
                </div>
            </div>
        );
    }
    
}

const mapStateToProps = ({ cartReducer: { cartItems, count, sum } }) => {
    return { cartItems, count, sum };
}

export default connect(mapStateToProps, { toCart, deleteFromCart })(CartItemsList);