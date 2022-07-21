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

console.log(tremBala.tipo);

tremBala.ligar();

let ferrari = new Carro('F50');

ferrari.ligar();