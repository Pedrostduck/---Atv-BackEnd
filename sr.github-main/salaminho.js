class ContaBancaria {
    constructor(depositar, sacar, verSaldo){
        this.depositar;
        this.sacar;
        this.verSaldo;
    }

depositar(sq){
    if(sq = this.depositar){
        this.depositar = sq
        console.log (`Saque Feito:${this.depositar}`)
    }
}

sacar(sq){
    if(sq < this.sacar){
        this.sacar = sq;
        console.log (`Saque Realizado`)
    }
}

verSaldo(){

}

}

let conta = new ContaBancaria ("Ana", 1000);
conta.sacar(200)
conta.verSaldo()
conta.sacar(1000)