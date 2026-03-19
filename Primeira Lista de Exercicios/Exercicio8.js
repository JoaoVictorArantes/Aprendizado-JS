/*
08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
registro de todos  as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
pontuação3 etc..”, ===== descreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
jogo. (Número do pior jogo).
Obs.: O primeiro jogo não conta como novo recorde do melhor.
Exemplo:
String: “10 20 20 8 25 3 0 30 1”
Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
aconteceu no sétimo jogo.)
*/

function campeonato (stringPontos){
    // Converte a string em um array de números
    let pontos = stringPontos.split(" ").map(Number)
    
    // Inicializa as variáveis com base no primeiro jogo
    let maiorNumero = pontos[0]
    let menorNumero = pontos[0]
    let recorde = 0;
    let piorJogo = 1;

    // Percorre o array a partir do segundo jogo (índice 1)
    for (let index = 1; index < pontos.length; index++) {
        if (pontos[index] > maiorNumero) {
            // Atualiza o recorde de maior pontuação
            maiorNumero = pontos[index]
            recorde++;
        } else if (pontos[index] < menorNumero) {
            // Atualiza o recorde de pior pontuação e guarda a posição do jogo
            menorNumero = pontos[index]
            piorJogo = index + 1;// +1 porque o índice começa em 0, mas os jogos em 1
        }     
    }
    // 4. Retorna o vetor conforme solicitado
    return [recorde, piorJogo];

}

const resultado = campeonato("10 20 20 8 25 3 0 30 1");
console.log(resultado); // Saída esperada: [3, 7]