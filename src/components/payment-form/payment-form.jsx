import React, { Component } from 'react';
import { CardElement } from 'react-stripe-elements';

import './payment-form.css';

class PaymentForm extends Component {


    render() {
        const { count, sum } = this.props;
        return(
            <form 
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

export default PaymentForm;