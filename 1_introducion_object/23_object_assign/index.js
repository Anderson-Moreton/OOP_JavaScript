let pessoa = {
    nome: "Anderson",
    getNome() {
        console.log("O nome da pessoa é: " + this.nome);
    }
};

let pessoa2 = {

};

Object.assign(pessoa2, pessoa);

console.log(pessoa2);

pessoa2.getNome();

pessoa2.nome = "Pedro";

console.log(pessoa);

console.log(pessoa === pessoa2);