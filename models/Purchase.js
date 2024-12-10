const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  date: { type: Date, required: true},
  buyer: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User"}
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

module.exports = Purchase;
