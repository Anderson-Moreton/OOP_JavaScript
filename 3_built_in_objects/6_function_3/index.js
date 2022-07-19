let a = {
    nome: 'Anderson',
    dizerNome() {
        console.log('Olá, meu nome é ' + this.nome);
    }
};

let b = {
    nome: 'Otávio'    
}

let c = {
    nome: 'Gabriel'
}

a.dizerNome();

a.dizerNome.call(b); //Function -> call

a.dizerNome.call(c);