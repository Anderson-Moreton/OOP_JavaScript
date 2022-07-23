function descreverCarro(marca: string, aro?: number) {
    if(aro) {
        console.log(`A marca do carro é ${marca} e ele tem uma roda de aro ${aro}`);
    } else {
        console.log(`A marca do carro é ${marca}`);
    }
}

descreverCarro("Ferrari", 22)
descreverCarro("BMW");