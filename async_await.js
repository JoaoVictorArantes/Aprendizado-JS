function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function() {
            //console.log('Executando Callback...');
            resolve();
        }, tempo);
    }) 
}

async function executar(){
    let valor = 1;
    console.log(`Executando ${valor}`);
    
    await esperarPor(1500);
    console.log(`Executando ${valor + 1}.`);

    await esperarPor(1500);
    console.log(`Executando ${valor + 2}.`);

    await esperarPor(1500);
    console.log(`Executando ${valor + 3}.`);

    return valor;
}

async function ExecutarAgora(){
    const valor = await executar();

    console.log(valor);
}

executar();

esperarPor(2000)
    .then(esperarPor)
    .then(esperarPor)