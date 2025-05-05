const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  dueDate: { type: Date, required: true },
  status: { type: String, enum: ['pending', 'paid', 'overdue'], default: 'pending' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Loan', loanSchema);
