function criarArvore (especie, temFruto) {
    return {
        especie: especie,
        temFruto: temFruto
    }
}

let laranjeira = criarArvore('Laranjeira', true);


function Heroi (nome, classe) {
    this.nome = nome;
    this.classe = classe;
}

let jaspion = new Heroi ('Jaspion', 'Robô');

let obj = {
    teste: "teste",
}

console.log(laranjeira instanceof criarArvore);
console.log(laranjeira instanceof Object);
console.log(jaspion instanceof Heroi);
console.log(obj instanceof Object);