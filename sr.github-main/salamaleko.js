class Pessoa {
    constructor(nome,idade){
        this.idade = idade;
        this.nome = nome;
    }

    apresentar (){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

let p1 = new Pessoa ("Maria", 16);
let p2 = new Pessoa ("João", 20);

p1.apresentar();
 p2.apresentar();