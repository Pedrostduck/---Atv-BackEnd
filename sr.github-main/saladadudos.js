class Carro {
    constructor (modelo, cor) {
    this.modelo = modelo;
    this.cor = cor;
    this.velocidadeAtual = 0;
    }
    acelerar(valor){
        this.velocidadeAtual += valor;
        console.log(`${this.modelo} acelerou.Velocidade atual: ${this.velocidadeAtual}`);
    }
frear(valor){
    this.velocidadeAtual -= valor;
    if(this.velocidadeAtual < 0){
        this.velocidadeAtual = 0;
    }
    console.log(`Modelo ${this.modelo}, Freiou, Cor ${this.cor}, Velocidade ${this.velocidadeAtual} Km/h`)
}
mostrarStatus (){
    console.log (`Modelo ${this.modelo}, Cor ${this.cor}, Velocidade ${this.velocidadeAtual} Km/h`)
}
}
let carro = new Carro("Civic", "Cinza")
carro.mostrarStatus();
carro.acelerar(50);
carro.frear(30);