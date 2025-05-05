const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
require('dotenv').config();


dotenv.config();  // Load environment variables from .env

const app = express();
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log('MongoDB connection error:', err));

// Routes
const customerRoutes = require('./routes/customers');
app.use('/api/customers', customerRoutes);

// Listen on port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
