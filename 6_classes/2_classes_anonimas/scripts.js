let Humano = class {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  nomeDaPessoa() {
    console.log(`O nome da pessoa é: ${this.nome}`);
  }
}

console.log(typeof Humano);

let anderson = new Humano('Anderson', 34);

console.log(anderson);

anderson.nomeDaPessoa();