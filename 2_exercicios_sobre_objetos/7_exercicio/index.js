let portas = 4;
let cor = 'Azul';
let bancoDeCouro = true;
let freioAbs = true;
let pago = 'Carro está ';

let corsa = {
    portas,
    cor,
    [pago+'pago']: 'sim'
}

let x1 = {
    portas,
    cor,
    bancoDeCouro,
    freioAbs,
    [pago+'pago']: 'não'
}

console.log(corsa);
console.log(x1);