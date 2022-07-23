var Humano = /** @class */ (function () {
    function Humano(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Humano.prototype.apresentarHumano = function () {
        return "O nome do humano \u00E9 ".concat(this.nome, " e ele tem ").concat(this.idade, " anos!");
    };
    return Humano;
}());
var pessoa = new Humano('Anderson', 34);
console.log(pessoa);
console.log(pessoa.apresentarHumano());
