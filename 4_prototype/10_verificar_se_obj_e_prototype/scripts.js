let equipamentoDoCarro = {
  preco: 10000,
  calota: true,
  cor: 'Azul',
  aro: 16
}

function Carro(marca) {
  this.marca = marca;
}

Carro.prototype = equipamentoDoCarro;

let fusca = new Carro('VW');

console.log(fusca.preco);

console.log(equipamentoDoCarro.isPrototypeOf(fusca));