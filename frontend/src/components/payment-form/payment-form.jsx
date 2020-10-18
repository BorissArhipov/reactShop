import React, { Component } from 'react';

import './payment-form.css';

class PaymentForm extends Component {


    render() {
        const { count, sum, cartItems } = this.props;
        console.log(cartItems);
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
                <button>
                    Pay!
                </button>
            </form>
        )
    }
}

export default PaymentForm;