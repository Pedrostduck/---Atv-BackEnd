class Produto {
    constructor(nome, preco, quantidade){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    mostrarDados(){
        console.log(`O produto ${this.nome}, com o preço ${this.preco}, tem ${this.quantidade} no estoque.`)
    }
    vender(qtd){
        if(qtd <= this.quantidade){
            this.quantidade -= qtd;
            console.log (`Venda Realizada, quantidade atual ${this.quantidade}`)
        } else{
            console.log("Estoque em falta, Selecione uma quantidade disponível ou Volte Novamente mais Tarde");
        }
    }
    repor(qtd){
        this.quantidade += qtd;
        console.log(`Reposição feita, a quantidade foi alterada para ${this.quantidade}`);
    }

}

let produto = new Produto ("Qboa", 2.5, 100);
produto.mostrarDados();
produto.vender(10);
produto.repor(20);

