// test.js
try {
    const jsonServer = require('json-server');
    console.log('json-server foi carregado com sucesso!');
    // Se você quiser ver a versão, pode adicionar:
    // console.log('Versão do json-server:', jsonServer.version);
} catch (error) {
    console.error('Erro ao carregar json-server:', error.message);
}