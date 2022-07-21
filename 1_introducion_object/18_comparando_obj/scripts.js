function Ninja (nome, arma) {
    this.nome = nome;
    this.arma = arma;
}

const naruto = new Ninja ("Naruto", "Shuriken");
const rocklee = new Ninja ("Rock Lee", "Punho");
const cleneDoNaruto = new Ninja ("Naruto", "Shuriken");
const cloneVerdadeiroDoNaruto = naruto;

console.log(naruto === rocklee);
console.log(naruto === cleneDoNaruto);
console.log(naruto === cloneVerdadeiroDoNaruto);
console.log(cleneDoNaruto === cloneVerdadeiroDoNaruto);