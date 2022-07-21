function extend(Filho, Pai) {
  let paiProto = Pai.prototype;
  let filhoProto = Filho.prototype;
  for(let i in paiProto) {
    filhoProto[i] = paiProto[i];
  }
  //filho tem acesso ao ojt pai
  filhoProto.uber = paiProto;
}

function Veiculo() {}

Veiculo.prototype.carenagem = 'Aço';
Veiculo.prototype.itens = ['Teto solar', 'blindagem', 'motor turbo'];
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

//adiciona item aos itens
Trem.prototype.itens.push('janelas fixas');


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

console.log(trem);