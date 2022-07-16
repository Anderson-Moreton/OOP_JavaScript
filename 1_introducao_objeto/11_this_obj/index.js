let ninja = {
    classe: 'Profissional',
    arma: 'Shuriken',
    atirarArma: function(){
        console.log(`Atirou a ${this.arma}`);
    },
    atirarDuasVezes: function() {
        for(let i = 2; i > 0; i--) {
            this.atirarArma();
        }
    }
}

let ninja2 = {
    classe: 'Profissional',
    arma: 'kunai',
    atirarArma: function() {
        console.log(`Atirou a ${this.arma}`);
    }
}

ninja.atirarArma();
ninja2.atirarArma();

ninja.atirarDuasVezes();