function criarCarro(modelo, portas, aro, tetoSolar) {
    return {
        modeloDoCarro: modelo,
        portas: portas,
        aro: aro,
        tetoSolar: tetoSolar,
        ligarCarro: function () {
            console.log(`Ligou o(a): ${this.modeloDoCarro}`)
        },
        temTetoSolar: function () {
            if (this.tetoSolar == true) {
                console.log("Tem teto Solar");
            } else {
                console.log("Este modelo não tem teto solar");
            }
        }
    }
}

let ferrari = criarCarro('Ferrari', 4, 20, true);

console.log(ferrari.modeloDoCarro);

ferrari.ligarCarro();

ferrari.temTetoSolar();

let bmw = criarCarro("X1", 4, 22, false);

console.log(bmw.modeloDoCarro);

bmw.ligarCarro();

bmw.temTetoSolar();