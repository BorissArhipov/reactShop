import express from 'express';
import stripeLoader from 'stripe';

const router = express.Router();

const stripe = new stripeLoader('sk_test_123');

const charge = ( token, count, sum, cartItems ) => {
    return stripe.charges.create({
        amount: sum * 100,
        currency: 'eur',
        source: token
    });
}

router.post('/api/donate', async (req, res, next) => {
    try {
        let data = await charge(req.body.token.id, req.body.amount)
        console.log(data);
        res.send("Charged")
    } catch (e) {
        throw e;
    }
})

export default router