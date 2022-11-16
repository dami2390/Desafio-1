const http = require('http');

const server = http.createServer( (request, response) => {
    response.end('Hola mundo')
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Servidor escuchando al puerto: http://localhost:${PORT}`)
});