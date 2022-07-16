let pessoa = {
    nome: "Anderson",
    idade: 34,
    falar: function () {
        console.log(`Oi, meu nome é ${this.nome}`);
    },
    aniversario: function () {
        this.idade += 1;
    },
    dizerIdade: function () {
        console.log(`A minha idade é ${this.idade}`);
    },
    podeDirigir: function () {
        if (this.idade >= 18) {
            console.log("Você pode dirigir")
        } else {
            console.log("Você ainda não tem idade para dirigir!")
        }
    },
    caracteristicas: {
        cnh: true,
        carteira: ['dinheito', 'documento', 'moeda']
    }
};

console.log(pessoa.caracteristicas);

console.log(pessoa.caracteristicas.carteira[2]);