// controllers/authController.js

exports.register = (req, res) => {
    return res.status(201).json({ message: 'register endpoint' });
  };
  
  exports.login = (req, res) => {
    return res.json({ message: 'login endpoint' });
  };
  