/* 
07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.

*/

const bhaskara = (ax,bx,c) => {
    let delta = (bx**2) - 4 * ax * c

    let x1 = (-bx + delta)/ (2 * ax)

    let x2 = (-bx - delta)/ (2 * ax);
    if (delta < 0){
        return console.log(`O delta deu negativo ${delta}, a equação não possui raízes reais, as raízes são complexas.`)
    }else {
        return console.log(`Os resultados são: x1= ${x1} e x2= ${x2}`)

    }
}

bhaskara(3, -5, 12)