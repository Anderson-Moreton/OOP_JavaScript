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

//Construtor temporario
let F =function(){
  F.prototype = Veiculo.prototype;
  Carro.prototype = new F();
}

let tremBala = new Trem('Trem Bala');
let trem = new Trem('Trem');
let ferrari = new Carro('F50');

//Mudança em cadeia
Carro.prototype.ligar = function() {
  console.log("O carro ligou!")
}

trem.ligar();
tremBala.ligar()
ferrari.ligar();

