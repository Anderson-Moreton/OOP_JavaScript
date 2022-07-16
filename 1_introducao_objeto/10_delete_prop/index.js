let carro = {
    modelo: "SUV",
    ligar: function() {
        console.log("Carro ligado!");
    }
}

console.log(carro.modelo);

delete carro.modelo;
delete carro.ligar;

console.log(carro);

