exports.register = (req, res) => {
    res.status(201).json({ message: 'register endpoint' });
  };
  exports.login = (req, res) => {
    res.json({ message: 'login endpoint' });
  };

  