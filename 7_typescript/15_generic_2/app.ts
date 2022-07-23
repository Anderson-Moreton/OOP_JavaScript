function identity<T>(arg: T): T {
    console.log(typeof arg);
    return arg;
}

// console.log(identity<number>("Anderson")); Esse formato dará um erro!!
console.log(identity<number>(5));
console.log(identity<boolean>(true));
console.log(identity<string>("Otávio"));