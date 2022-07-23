class Humano {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentarHumano() {
        return `O nome do humano é ${this.nome} e ele tem ${this.idade} anos!`;
    }
}

let pessoa = new Humano('Anderson', 34);

console.log(pessoa);

console.log(pessoa.apresentarHumano());