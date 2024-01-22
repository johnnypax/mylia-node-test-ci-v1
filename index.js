const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });
});

app.get('/client', (req, res) => {
    res.json({ message: 'Hello Client!' });
});

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Esporta una funzione per chiudere il server, necessario per JEST in asincrono
const close = () => {
    server.close();
};

module.exports = { app, close };