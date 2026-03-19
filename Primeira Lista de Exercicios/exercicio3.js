const powpow = (base, expoente) => Math.pow(base, expoente);

console.log(powpow(2, 3));    // 8
console.log(powpow(5, 0));    // 1
console.log(powpow(-3, 2));   // 9
console.log(powpow(2, -2));   // 0.25
console.log(powpow(9, 0.5));  // 3

//==========================================

const powpow2 = (base, expoente) => base ** expoente

console.log(powpow2(2, 3));    // 8
console.log(powpow2(5, 0));    // 1
console.log(powpow2(-3, 2));   // 9
console.log(powpow2(2, -2));   // 0.25
console.log(powpow2(9, 0.5));  // 3