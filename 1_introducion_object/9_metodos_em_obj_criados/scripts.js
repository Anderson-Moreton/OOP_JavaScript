let carro = {
    modelo: "SUV"
}

carro.portas = 4;

console.log(carro);

carro.acelerar = function() {
    console.log("Vrauuuuuuu");
}

carro.acelerar();

if(carro.modelo == "SUV") {
    carro.tetoSolar = true;
}

console.log(carro);