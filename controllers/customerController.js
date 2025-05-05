const Customer = require('../models/customer');
const Loan = require('../models/Loan');
const moment = require('moment');

// Create customer
const addCustomer = async (req, res) => {
  try {
    const newCustomer = new Customer({
      ...req.body,
      createdBy: req.user.id,  // Assuming you add JWT user ID to req.user
    });

    await newCustomer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get customers
const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find({ createdBy: req.user.id });
    res.status(200).json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
module.exports = { addCustomer };
// CRUD for loans, repayments etc.
