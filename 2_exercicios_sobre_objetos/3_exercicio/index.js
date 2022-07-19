function Ninja(nome, arma) {
    this.nome = nome;
    this.arma = arma;
    this.atirarArma = function () {
        console.log(`Olá, eu sou o ${this.nome} e atirei a ${this.arma}`);
    }
};

let naruto = new Ninja('Naruto', 'Shuriken');

console.log(naruto.nome);
console.log(naruto.arma);
naruto.atirarArma();