const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Prashant :My First Node App 🚀' });
});

module.exports = app;
