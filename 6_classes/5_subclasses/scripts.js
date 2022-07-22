class Humano {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  falar() {
    console.log(`Olá, me chamo ${this.nome}, sou ${this.profissao} e sou especializado na área ${this.especializacao}`);
  }
} 

class Engenheiro extends Humano {
  constructor(nome, idade, espec) {
    super(nome, idade);
    this.profissao = "Engenheiro";
    this.especializacao = espec;
  }
}

let anderson = new Engenheiro('Anderson', 34, 'Civil');

console.log(anderson);

anderson.falar();