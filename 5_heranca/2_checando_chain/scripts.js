function Veiculo() {
  this.carenagem = 'Aço';
  this.ligar = function() {
    console.log(`O ${this.tipo} ligou!!`);
  }
}

function Trem(tipo) {
  this.tipo = tipo;
  this.vagoes = 50;
}

function Carro(tipo) {
  this.tipo = tipo;
  this.pneus = 4;
}

Trem.prototype = new Veiculo();
Carro.prototype = new Veiculo();

let tremBala = new Trem('Trem Bala');
let ferrari = new Carro('F50');

console.log(trembala instanceof Trem); //true
console.log(ferrari instanceof Carro); //true

console.log(trembala instanceof Veiculo); //true
console.log(ferrari instanceof Veiculo); //true

console.log(trembala instanceof Object); //true
console.log(ferrari instanceof Object); //true

console.log(trembala instanceof Carro); //false
console.log(ferrari instanceof Trem); //false