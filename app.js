const express = require('express');
const app = express();
const quotes = require('./data/quotes.json');

// Middleware para CORS (si lo necesitas)
app.use(require('cors')());

// Ruta principal (nueva)
// Ruta principal (puedes mostrar instrucciones o redirigir)
app.get('/', (req, res) => {
  res.send(`
    <h1>API de Citas de Shakespeare</h1>
    <p>Endpoints disponibles:</p>
    <ul>
      <li><a href="/quotes">/quotes</a> - Todas las citas</li>
    </ul>
  `);
});

// Ruta GET /quotes (¡esto es lo que falta!)
app.get('/quotes', (req, res) => {
  res.json(quotes); // Devuelve todas las citas
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
