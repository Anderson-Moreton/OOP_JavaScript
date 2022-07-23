function imprimirNome(obj: {nome: string, idade: number}) {
    console.log(`Olá, meu nome é ${obj.nome} e eu tenho ${obj.idade} anos!`)
}

let pessoa1 = {nome: 'Anderson', idade: 34};

imprimirNome(pessoa1);

let pessoa2 = {nome: 'Otávio', idade: 1};

imprimirNome(pessoa2);