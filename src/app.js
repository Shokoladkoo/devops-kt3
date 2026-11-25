const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('КТ3 App');
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

module.exports = app;