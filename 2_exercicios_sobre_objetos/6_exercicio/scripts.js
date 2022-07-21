function compareObjetos (obj1, obj2) {
    if(obj1 instanceof obj2) {
        console.log(`O objeto ${obj1.nome} é uma instância de ${obj2.name}`);
    } else {
        console.log(`O objeto ${obj1.nome} não é uma instância de ${obj2.name}`);
    }
}

function Ninja(nome, qtd) {
    this.nome = nome;
    this.estoqueShuriken = qtd;
    this.atirarShuriken = function (inimigo) {
        if (this.estoqueShuriken > 0) {
            console.log(`O ${this.nome} atirou a Shuriken`);
            this.estoqueShuriken -= 1;
            inimigo.vivo = false;
        } else {
            console.log('Você não tem mais Shurikens!!');
        }
    }
}

function Inimigo(nome) {
    this.nome = nome;
    this.vivo = true;
}

let naruto = new Ninja('Naruto', 3);

let orochimaru = new Inimigo('Orochimaru');

compareObjetos(naruto, Ninja);
compareObjetos(orochimaru, Ninja);
compareObjetos(orochimaru, Inimigo);
