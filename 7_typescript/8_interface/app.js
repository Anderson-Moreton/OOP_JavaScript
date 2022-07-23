function imprimirNome(obj) {
    console.log("Ol\u00E1, meu nome \u00E9 ".concat(obj.nome, " e eu tenho ").concat(obj.idade, " anos!"));
}
var pessoa1 = { nome: 'Anderson', idade: 34 };
imprimirNome(pessoa1);
var pessoa2 = { nome: 'Otávio', idade: 1 };
imprimirNome(pessoa2);
