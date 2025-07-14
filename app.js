const express = require('express');
const currencyRoutes = require('./routes/currencyRoutes');

const app = express();

app.use(express.json());

// Register the route
app.use('/api', currencyRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Currency Converter API!');
});

module.exports = app;
