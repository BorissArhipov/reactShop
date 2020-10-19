const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
    id: String,
    name: String,
    itemCount: Number,
    itemId: String,
});

module.exports = mongoose.model('OrderItems', orderItemSchema);