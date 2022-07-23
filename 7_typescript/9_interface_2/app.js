function criarCarro(config) {
    var carro = { marca: 'default', aro: 16, tetoSolar: false, cor: 'preto' };
    if (config.marca) {
        carro.marca = config.marca;
    }
    if (config.aro) {
        carro.aro = config.aro;
    }
    if (config.tetoSolar) {
        carro.tetoSolar = config.tetoSolar;
    }
    if (config.cor) {
        carro.cor = config.cor;
    }
    return carro;
}
var bmw = criarCarro({ marca: 'X1', tetoSolar: true });
console.log(bmw);
var ferrari = criarCarro({ marca: 'F50', aro: 22, tetoSolar: false, cor: 'vermelho' });
console.log(ferrari);
