function Ninja(nome, qtd) {
    this.nome = nome;
    this.estoqueShuriken = qtd;
    this.atirarShuriken = function () {
        if (this.estoqueShuriken > 0) {
            console.log(`O ${this.nome} atirou a Shuriken`);
            this.estoqueShuriken -= 1;
        } else {
            console.log('Você não tem mais Shurikens!!');
        }
    }
}

let naruto = new Ninja('Naruto', 3);

console.log(naruto);

naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();
naruto.atirarShuriken();