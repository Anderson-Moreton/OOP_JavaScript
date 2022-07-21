function Veiculo() {}

Veiculo.prototype.carenagem = 'Aço';
Veiculo.prototype.ligar = function () {
  console.log(`O ${this.tipo} ligou!!`);
}

function Trem(tipo) {
  this.tipo = tipo;
}

Trem.prototype.vagoes = 50;

function Carro(tipo) {
  this.tipo = tipo;
}

Carro.prototype.pneus = 4;

//Copiando só o prototype, em vez de instânciar uma classe
Trem.prototype = Veiculo.prototype;
Carro.prototype = Veiculo.prototype;

let tremBala = new Trem('Trem Bala');
let trem = new Trem('Trem');
let ferrari = new Carro('F50');

trem.ligar();
tremBala.ligar()
ferrari.ligar();

console.log(tremBala.carenagem);