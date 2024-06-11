import type { Livro } from "~/models/livro"

export type Carrinho = {
    livros: Array<Livro>,
    
}


export const carrinhoStore = defineStore('carrinhoStore', {
    state:(): Carrinho =>({
        livros: []
    }),
    actions: {
        adicionarNoCarrinho(livro:Livro){
            this.livros.push(livro);
        },
        removerDoCarrinho(posicaoNoCarrinho: number){
            this.livros.splice(posicaoNoCarrinho,1);
        }
    },
    getters: {
        estaNoCarrinho: (carrinho:Carrinho) => (livro:Livro): boolean =>{
            return carrinho.livros.findIndex(item=>item.id === livro.id) !== -1 //-1 significa não encontrou
        }
    }
})   