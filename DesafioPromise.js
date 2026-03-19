const fileSystem = require('fs');
const path = require('path');

function lerArquivo(caminhoDoArquivo){
    return new Promise((resolve, reject) => {
        fileSystem.readFile(caminhoDoArquivo, function(erro, conteudo){
            if (erro) return reject(erro);//caso nao leia nada.
            resolve(conteudo.toString());
        })
    })
}

const caminho = path.join(__dirname, 'Dados.txt');

lerArquivo(caminho)
    .then(conteudo => conteudo.split('/\r?\n/'))
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é:  ${conteudo}.`)
    .then(console.log);