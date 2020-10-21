import React, { Component } from 'react';
import { compose } from 'redux';
import { graphql } from 'react-apollo';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { emptyCart } from '../../actions/empty-cart';

import { addClientMutation, addOrderItemMutation} from './mutations';

import './payment-form.css';

const graphqlAddClient = graphql(addClientMutation, {
  props: ({ mutate }) => ({
    addClient: client => mutate({
      variables: client,
    }),
  }),
});

const graphqlAddOrderItem = graphql(addOrderItemMutation, {
    props: ({ mutate }) => ({
        addOrderItem: orderItem => mutate({
        variables: orderItem,
      }),
    }),
  });

class PaymentForm extends Component {

    handleSubmit(e) {
        e.preventDefault();

        if(
            e.target.name.value.search(/[a-zA-Z]/g) === -1 ||
            e.target.adress.value.search(/[a-zA-Z]/g) === -1 ||
            e.target.adress.value === '' ||
            e.target.name.value === ''
        ) {
            alert('Fields must contain only letters');
            return;
        }

        this.props.addClient({
            name: e.target.name.value,
            adress: e.target.adress.value,
            orderId: uuidv4()
        }).then(res => {
            for(const item of this.props.cartItems) {
                this.props.addOrderItem({
                    id: res.data.addClient.orderId,
                    name: item.title,
                    itemId: item.id,
                    itemCount: Number(item.itemCount)
                }).then(res => {
                    alert('Your order has been received');
                    this.props.emptyCart();
                })
                .catch(err => {
                    alert("Something went wrong!");
                    throw new Error(err);
                });
            }
        })
        .catch(err => {
            alert("Something went wrong!");
            throw new Error(err);
        });
    }

    render() {
        const { count, sum, cartItems } = this.props;
        console.log(cartItems);
        return(
            <form 
                onSubmit={(e) => this.handleSubmit(e)}
                className="payment-form"
            >
                <label htmlFor="name" className="payment-label">
                    Your name
                </label>
                <input className='payment-input' id="name" name="name" type="text"/>
                <label htmlFor="adress" className='payment-label'>
                    Your adress
                </label>
                <input className='payment-input' id="adress" name="adress" type="text"/>
                <div className='payment-wrap'>
                    <span className='payment-span'>
                        Total price: {sum}&euro;
                    </span>
                    <span className='payment-span'>
                        Items in total: {count}
                    </span>
                </div>
                <button className='payment-btn' type="submit">
                    Make an order!
                </button>
            </form>
        )
    }
}

export default compose(graphqlAddClient, graphqlAddOrderItem, connect(null, {emptyCart}))(PaymentForm);