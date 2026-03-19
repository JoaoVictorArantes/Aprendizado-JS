/*
34) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras.
*/

function comparaCaracteres(string1,string2){
    const conjunto1 = new Set(string1.toLowerCase())
    const conjunto2 = new Set(string2.toLowerCase())

    if (conjunto1.size !== conjunto2.size) {
        return false;
    }

    for(let char of conjunto1){
        if(!conjunto2.has(char)){
            return false
        }
    }
    return true;
}

console.log(comparaCaracteres("Roma", "Amor"));    // true
console.log(comparaCaracteres("Arara", "Rara"));  // true (ambas só usam 'a' e 'r')
console.log(comparaCaracteres("Casa", "Carro"));  // false
console.log(comparaCaracteres("Abba", "ba"));     // true