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

class Ninja extends Humano {
    classe: string;
    constructor(nome: string, idade: number, classe: string) {
        super(nome, idade);
        this.classe = classe;
    }

    atirarArma () {
        console.log("O " + this.nome + " atirou a Shuriken");
    }
}

let pessoa = new Ninja('Anderson', 34, "Hokage");

console.log(pessoa);

console.log(pessoa.apresentarHumano());

pessoa.atirarArma();