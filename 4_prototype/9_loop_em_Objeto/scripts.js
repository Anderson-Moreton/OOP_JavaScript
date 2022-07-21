function Carro(marca, preco, cor, aro) {
  this.marca = marca;
  this.preco = preco;
  this.calota = true;
  this.cor = cor;
  this.aro = aro;
}

let fusca = new Carro("VW", 10000, 'preto', 18);

for(prop in fusca) {
  console.log(prop + ' => ' + fusca[prop]);
}
