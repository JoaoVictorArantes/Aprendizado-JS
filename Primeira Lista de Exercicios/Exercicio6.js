/*
06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.

*/

function jurosSimples (capitalInicial, taxaDeJuros, tempoDeAplicacao){
    return console.log(capitalInicial *(1 + taxaDeJuros * tempoDeAplicacao))
}

const jurosCompostos = (capitalInicial, taxaDeJuros, tempoDeAplicacao) => console.log((capitalInicial * (1 + taxaDeJuros) ** tempoDeAplicacao).toFixed(2))


jurosSimples(1000,0.10,2) //1200
jurosCompostos(1000,0.10,2) //1210


jurosSimples(500,0.05,12) //800
jurosCompostos(500,0.05,12) //897.83


jurosSimples(2000,0.02,6) //2240
jurosCompostos(2000,0.02,6) //2252.32