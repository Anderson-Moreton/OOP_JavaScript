function extend(Filho, Pai) {
  let paiProto = Pai.prototype;
  let filhoProto = Filho.prototype;
  for (let i in paiProto) {
    filhoProto[i] = paiProto[i];
  }
  //filho tem acesso ao ojt pai
  filhoProto.uber = paiProto;
}

//No atributo(o, stuff) vai ser a classe pai e depois o objeto filho
function objectClone(o, stuff) {
  let n;

  function F() {};
  F.prototype = o;
  n = new F();
  for (let i in stuff) {
    n[i] = stuff[i];
  }
  return n;
}

function Veiculo() {
  this.carenagem = 'Aço';
  this.itens = ['Teto solar', 'blindagem', 'motor turbo'];
  this.ligar = function () {
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

let v = new Veiculo;

let trem = objectClone(v, {
  tipo: 'Trem',
  vagoes: 50,
});

trem.itens.push('janela fixa');

console.log(trem);

console.log(Veiculo);