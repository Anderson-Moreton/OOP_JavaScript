function identity(arg) {
    console.log(typeof arg);
    return arg;
}
// console.log(identity<number>("Anderson")); Esse formato dará um erro!!
console.log(identity(5));
console.log(identity(true));
console.log(identity("Otávio"));
