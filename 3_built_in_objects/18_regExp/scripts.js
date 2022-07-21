// regex != regexp

let palavra = new RegExp(/nde/);

console.log(palavra.test("Bola"));
console.log(palavra.test("Otávio"));
console.log(palavra.test("Anderson"));
