exports.createLoan      = (req, res) => res.status(201).json({ message: 'createLoan' });
exports.getLoans        = (req, res) => res.json({ message: 'getLoans' });
exports.recordRepayment = (req, res) => res.json({ message: 'recordRepayment' });
exports.summary         = (req, res) => res.json({ message: 'summary' });
exports.overdue         = (req, res) => res.json({ message: 'overdue' });
