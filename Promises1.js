let promessa = new Promise(function (cumpriPromessa){
    cumpriPromessa(['Ana', 'Bia', 'Carlos', 'Joao']);
});

function primeiroElemento (array){
    return array[0];
};

//function primeiraLetra();

promessa
    .then(primeiroElemento)
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))

