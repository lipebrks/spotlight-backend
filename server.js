// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Aponta para o db.json
const middlewares = jsonServer.defaults();

server.use(middlewares);

const allowedOrigins = [
    'https://lipebrks.github.io/spotlight/',
    'https://lipebrks.github.io/spotlight',
    'http://localhost:8000', 
    'http://localhost:5500', 
    'http://127.0.0.1:5500',
    'https://spotlight-backend-z6xo.onrender.com'
];

server.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

server.use(router);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`JSON Server está rodando na porta ${PORT}`);
});