/*
11) As regras para o cálculo dos anos bissextos são as seguintes:
De 4 em 4 anos é ano bissexto;
De 100 em 100 anos não é ano bissexto;
De 400 em 400 anos é ano bissexto;
Prevalecem as últimas regras sobre as primeiras.
Partindo daí elabore uma função que recebe um ano e calcula se ele é ano bissexto, imprimindo no console a
mensagem e retornando true ou false.
*/

function verificaAno (anoInteiro){
    let anobisexto;
     
    if(anoInteiro <= 0){
        anobisexto = false
    }else if(anoInteiro % 400 === 0){
        anobisexto = true
    }else if (anoInteiro % 100 === 0){
        anobisexto = false
    }else if (anoInteiro % 4 === 0) {
        anobisexto = true
    }

    if (anobisexto === true){
        return console.log(`${anobisexto}. O ano ${anoInteiro} é um ano bisexto`)
    }else{
        return console.log(`${anobisexto}. O ano ${anoInteiro} não é um ano bisexto`)
    }
}

verificaAno(2024); // true (divisível por 4)
verificaAno(2100); // false (divisível por 100, mas não por 400)
verificaAno(2000); // true (divisível por 400)