require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const authRoutes     = require('./routes/auth');
const customerRoutes = require('./routes/customers');
const loanRoutes     = require('./routes/loans');
const { errorHandler } = require('./utils/errorHandler');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });

// Mount routes
app.use('/api/auth',      authRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/loans',     loanRoutes);

// Global error handler
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
