const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.post('/usuarios', (requisicao, resposta) =>{
    console.log(requisicao.body);
    resposta.send("<h1>Parabéns! Usuário incluido.</h1>");
});

app.post('/usuarios/:id', (requisicao, resposta) =>{
    console.log(requisicao.params.id);
    console.log(requisicao.body);
    resposta.send("<h1>Parabéns! Usuário alterado.</h1>");
});

/*app.listen(5501);*/

app.listen(5501, () => {
    console.log('Servidor rodando em http://localhost:3003');
});

/* tem que dar  node server.js pra funfar.
 cd codigo\Treino JS\HTML\Exercicios\form   */ 