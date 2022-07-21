function Carro(marca, preco) {
  this.marca = marca;
  this.preco = preco;
}


Carro.prototype = {
  rodas: 4,
  portas: 4,
  ligar() {
    console.log("O carro ligou!");
  }
}

Carro.prototype.aro = 20;

let bmw = new Carro('X1', 100000);

console.log(bmw);

console.log(bmw.rodas);

bmw.ligar();

console.log(bmw.portas);

console.log(bmw.aro);