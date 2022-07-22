class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

console.log(typeof Humano);

let anderson = new Humano('Anderson', 34);

console.log(anderson);