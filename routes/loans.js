const express = require('express');
const { protect } = require('../middleware/auth');
const {
  createLoan,
  getLoans,
  recordRepayment,
  summary,
  overdue
} = require('../controllers/loanController');

const router = express.Router();
router.use(protect);

router.route('/')
  .post(createLoan)
  .get(getLoans);

router.post('/:id/repay', recordRepayment);
router.get('/summary',    summary);
router.get('/overdue',    overdue);

module.exports = router;
