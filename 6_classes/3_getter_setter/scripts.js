class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  nomeDaPessoa() {
    console.log(`O nome da pessoa é: ${this.nome}`);
  }
  set mudarNomeDaPessoa(novoNome) {
    this.nome = 'Sr.' + novoNome;
  }

  get receberNomePessoa() {
    return `O nome da pessoa é ${this.nome}`;
  }
}

console.log(typeof Humano);

let anderson = new Humano('Anderson', 34);

console.log(anderson);

anderson.nomeDaPessoa();

anderson.mudarNomeDaPessoa = "Otávio";

console.log(anderson.nome);

console.log(anderson.receberNomePessoa);