function calculoSalario (horasTrabalhadas, valorHora){
    let salario = horasTrabalhadas * valorHora;
    console.log(`Salário igual a R$${salario.toFixed(2)}`); 
};

calculoSalario(150,40.5)