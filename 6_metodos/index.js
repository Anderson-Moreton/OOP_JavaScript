let pessoa = {
    nome: "Anderson",
    falar: function () {
        console.log(`Oi, meu nome é ${this.nome}`);
    }
};

console.log(pessoa);
pessoa.falar();