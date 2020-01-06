const http = require('http');
const express = require('express');
const PORT = 3000;
const app = express();

const server = http.createServer(app);

app.get(`/`, (req, res) => {
    res.send('Type something after the slash in the URL');
});

app.get(`/:text`, (req, res) => {
    res.send(`${req.params.text}`);
})

server.listen(3000, () => {
    console.log(`listening on port ${PORT}`)
});