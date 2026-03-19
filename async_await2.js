function gerarNumero(minimo , maximo, numeroJaSorteados){
    if (minimo > maximo) {
        [maximo,minimo] = [minimo, maximo]
    };
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            const fator = maximo - minimo + 1;
            const aleatorio = parseInt(Math.random() * fator) + minimo
            if (numeroJaSorteados.includes(aleatorio)) {
                reject(` O numero ${aleatorio}, já foi sorteado.`)
            } else {
                resolve()
            }
            resolve(aleatorio);
        }, 1000)
    })
}

gerarNumero(1, 5, [1,2,4]).then(console.log).catch(console.log)