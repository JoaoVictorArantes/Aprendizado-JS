function gerarNumero(minimo , maximo, tempo){
    if (minimo > maximo) {
        [maximo,minimo] = [minimo, maximo]
    };
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = maximo - minimo + 1;
            const aleatorio = parseInt(Math.random() * fator) + minimo
            resolve(aleatorio);
        }, tempo)
    })
}
function gerarVariosNumeros (){
    return Promise.all([
        gerarNumero(1,60, 4000),
        gerarNumero(1,60, 1000),
        gerarNumero(1,60, 500),
        gerarNumero(1,60, 3000),
        gerarNumero(1,60, 100),
        gerarNumero(1,60, 1500)
    ])
}

gerarVariosNumeros().then(numeros => console.log(numeros));