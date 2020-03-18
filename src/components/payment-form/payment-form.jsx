import React, { Component } from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

import './payment-form.css';

class PaymentForm extends Component {

    handleSubmit = async (e) => {
        const { count, sum, cartItems } = this.props;
        e.preventDefault();
        try {
            let { token } = await this.props.stripe.createToken({})
            console.log(token);
            await fetch('/api/donate', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ token, count, sum, cartItems })
            })
        } catch(e) {
            throw e;
        }
    }

    render() {
        const { count, sum } = this.props;
        return(
            <form 
                onSubmit={this.handleSubmit}
                className="payment-form"
            >
                <div>
                    <span>
                        Total price: {sum}&euro;
                    </span>
                    <span>
                        Items in total: {count}
                    </span>
                </div>
                <CardElement/>
                <button>
                    Pay!
                </button>
            </form>
        )
    }
}

export default injectStripe(PaymentForm);