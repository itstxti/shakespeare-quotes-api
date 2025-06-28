const express = require('express');
const app = express();
const quotes = require('./data/quotes.json');

app.get('/quotes', (req, res) => {
  res.json(quotes);
});

app.get('/quotes/random', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json(randomQuote);
});

app.get('/quotes/:id', (req, res) => {
  const quote = quotes.find(q => q.id === parseInt(req.params.id));
  if (!quote) return res.status(404).send('Quote not found');
  res.json(quote);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API running at http://localhost:${PORT}`);
});