function primeiroEUltimo(coisas){
    const primeiraPosicao = coisas.shift();
    const ultimaPosicao = coisas.pop();
    let resultado = [primeiraPosicao,ultimaPosicao];
    console.log(resultado);
}


primeiroEUltimo([7,14,"olá"])

primeiroEUltimo([-100,"aplicativo", 16])