require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Importar la función handler del API
const generateHandler = require('./api/generate.js');

// Endpoint para la API de generación
app.post('/api/generate', generateHandler);

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Fallback for any other route to index.html (SPA feel)
app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`\n🎄 Amigo Secreto Server running at: http://localhost:${PORT} 🎅`);
    console.log(`   Spread the joy!\n`);
});
