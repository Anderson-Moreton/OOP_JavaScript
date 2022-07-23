function descreverCarro(marca, aro) {
    if (aro) {
        console.log("A marca do carro \u00E9 ".concat(marca, " e ele tem uma roda de aro ").concat(aro));
    }
    else {
        console.log("A marca do carro \u00E9 ".concat(marca));
    }
}
descreverCarro("Ferrari", 22);
descreverCarro("BMW");
