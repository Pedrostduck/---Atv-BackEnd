class Calculadora{
    constructor(somar, subtrair, multiplicar, dividir) {
        this.dividir = dividir;
        this.multiplicar = multiplicar;
        this.subtrair = subtrair;
        this.somar = somar;
    }
    Somar(a, b){
       return a + b;
    }
    Multiplicar(a, b){
        return a * b;
    }
    Dividir(a, b){
        return a / b;
    }
    Subtrair(a, b){
        return a - b;
    }
}
let resultado = new Calculadora
resultado.Somar(60, 10);
resultado.Multiplicar(60, 10);
resultado.Dividir(60, 10);
resultado.Subtrair(60, 10);