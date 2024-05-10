import type { Produto } from "~/models/produtos";

export type CarrinhoItem = {
    produto: Produto;
    quantidade: number;
}

export type Carrinho = {
    produtos: Array<CarrinhoItem>;    
}

export const carrinho = defineStore('carrinhoStore', {
    state: (): Carrinho => ({
        produtos: []
    }),
    actions: {
      adicionarNoCarrinho(novoProduto: Produto){
            const produtoJaExiste = this.getProdutoDoCarrinho(novoProduto);
            if(produtoJaExiste){
                produtoJaExiste.quantidade += 1;
                this.produtos = [
                    ...this.produtos.filter(item=>item.produto.id !== produtoJaExiste.produto.id),
                    produtoJaExiste
                ];
            }
            //produto não está no carrinho ainda
            else{
                this.produtos.push({
                    quantidade: 1,
                    produto: novoProduto
                });
            }
      },
      removerDoCarinho(carrinhoItem: CarrinhoItem){
        const posicaoNoCarrinho = this.getProdutoDoCarrinhoIndex(carrinhoItem.produto);
        //remover o item inteiro do carrinho
        this.produtos.splice(posicaoNoCarrinho,1);

        if(carrinhoItem.quantidade){
            this.produtos = [
                ...this.produtos,
                carrinhoItem
            ];
        }
      }
    },
    getters: {
        getProdutoDoCarrinho: (carrinho:Carrinho) => (produtoParaEncontrar: Produto)=>{
            return carrinho.produtos.find(item=>item.produto.id === produtoParaEncontrar.id);
        },
        getProdutoDoCarrinhoIndex: (carrinho:Carrinho) => (produtoParaEncontrar: Produto)=>{
            return carrinho.produtos.findIndex(item=>item.produto.id === produtoParaEncontrar.id);
        },
        getCarrinho: (carrinho: Carrinho) => () : Array<CarrinhoItem> => {
            return carrinho.produtos;
        },
        getValorTotalDoCarrinho: (carrinho: Carrinho) => () : Number => {
            let soma = 0;
            carrinho.produtos.forEach(item=>{
                soma += (item.produto.preco * item.quantidade)
            })
            return soma;
        }
    }
  })