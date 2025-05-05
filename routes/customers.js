const express = require('express');
const router = express.Router();
const { addCustomer } = require('../controllers/customerController'); // ✅ Correct import

router.post('/add', addCustomer); // ✅ Correct usage

module.exports = router;
