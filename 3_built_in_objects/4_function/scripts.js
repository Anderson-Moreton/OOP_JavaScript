function teste(a) {
    return a;
}

console.log(teste("Opa"));

teste2 = new Function(
    'a',
    'return arguments'
);

console.log(teste2("testando")[0]);

// Esse método não é muito utilizado