const tipoTriangulo = (lado1,lado2,lado3) => {
    if (lado1 === lado2 && lado1 === lado3){
        return console.log("Esse é umn triangulo Equilátero");
        
    }else if (lado1 === lado2 && lado1 != lado3){
        return console.log("Esse é um triangulo Isósceles")
    }else if(lado1 != lado2 && lado2 != lado3 && lado1 != lado3){
        return console.log("Esse é um triangulo Escaleno")
    }else {
        return console.log("Inválido")
    }
}
tipoTriangulo(1,1,1)
tipoTriangulo(1,1,3)
tipoTriangulo(1,2,3)
tipoTriangulo(1,2,2)
