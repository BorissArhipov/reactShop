import React, { Component } from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

class PaymentForm extends Component {

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let token = await this.props.stripe.createToken({})
            console.log(token);
        } catch(e) {
            throw e;
        }
    }

    render() {
        return(
            <form 
                onSubmit={this.handleSubmit}
            >
                <CardElement/>
                <button>
                    Pay!
                </button>
            </form>
        )
    }
}

export default injectStripe(PaymentForm);