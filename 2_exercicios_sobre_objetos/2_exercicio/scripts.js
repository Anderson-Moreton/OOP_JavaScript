let pessoa = {
    nome: 'Otávio',
    exibirNome() {
        console.log(`Olá, meu nome é ${this.nome}`);
    }
};

console.log(pessoa);
console.log(pessoa.nome);
pessoa.exibirNome();