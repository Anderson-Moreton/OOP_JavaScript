function extend(Filho, Pai) {
  let F = function () {};
  F.prototype = Pai.prototype;
  Filho.prototype = new F();
}

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

//Construtor temporario por função
extend(Trem, Veiculo);
extend(Carro, Veiculo);


let tremBala = new Trem('Trem Bala');
let trem = new Trem('Trem');
let ferrari = new Carro('F50');

//Mudança em cadeia
Carro.prototype.ligar = function () {
  console.log("O carro ligou!")
}

trem.ligar();
tremBala.ligar()
ferrari.ligar();