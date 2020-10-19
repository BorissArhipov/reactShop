const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientsSchema = new Schema({
  name: String,
  adress: String,
  orderId: String
});

module.exports = mongoose.model('Clients', clientsSchema);