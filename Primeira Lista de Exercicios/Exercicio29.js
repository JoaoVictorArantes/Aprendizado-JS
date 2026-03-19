function intervalo (vetor) { 
    let intervaloDeNumeros = 0;
    for (let i = 0; i < vetor.length; i++) {
        if(vetor[i] >= 10 && vetor[i] <= 20){
            intervaloDeNumeros++;
        }
    }
    return `${intervaloDeNumeros} números dentro do intervalo.`
}

vetor1 = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
vetor2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log(intervalo(vetor1))
console.log(intervalo(vetor2))