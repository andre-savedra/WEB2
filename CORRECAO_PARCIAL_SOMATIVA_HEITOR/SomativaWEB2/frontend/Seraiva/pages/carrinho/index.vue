<script setup lang="ts">
import {carrinhoStore} from '~/stores/carrinho';
const { estaNoCarrinho,removerDoCarrinho,livros } = carrinhoStore();
import { Livro } from '~/models/livro';
import { salvarEmprestimo } from '../../services/emprestimo';
import { Emprestimo } from '~/models/emprestimo';
import { Usuario } from '~/models/usuario';
const {data} = useAuth();
//import { type SessionData } from '#auth';


const usuarioLogadoId: any = data.value /*as Usuario : new Usuario()*/;

console.log("usuario autenticado:", usuarioLogadoId[0].id)

const excluir = (indexDoLivro: number)=> {
    removerDoCarrinho(indexDoLivro);
}

const valorTotal = computed(()=>{
    let soma = 0;
    livros.forEach(item =>soma += Number(item.valor));
    //opcao com for comum:
    /*for(let i=0;i<livros.length;i++){
        soma += livros[i].valor;
        }*/
       console.log("soma: ", soma)
   return soma;
});

const fecharPedido = ()=> {
    const hoje = new Date();  
    console.log("hoje", hoje)
    console.log("dia", hoje.getDate())
    const dataPrevista = new Date(`${hoje.getFullYear()}-${hoje.getMonth()+1}-${hoje.getDate() + 14}`);
    const dataPrevistaFormatada = dataPrevista.toISOString().split("T")[0];
    
    const emprestimo = new Emprestimo();
    emprestimo.dataPrevista = dataPrevistaFormatada;
    //pega todos os livros, pega o id deles e transforma em string, e guarda em um array
    emprestimo.livroFK = livros.map(item=>item.id.toString());
    emprestimo.usuarioFK = usuarioLogadoId[0].id;

    console.log("emprestimo: ", emprestimo)
    salvarEmprestimo(emprestimo).then((respostaOk)=>alert("deu certo salvamento!"))
    .catch((error)=> {
        console.error("deu errado", error)
    })

}

</script>

<template>
    <div>
        <h1>CARRINHO</h1>
        <div v-for="(itemCarrinho,index) in livros">
            <p>Id Livro: {{ itemCarrinho.id }}</p>
            <p>titulo Livro: {{ itemCarrinho.titulo }}</p>
            <p>valor Livro: {{ itemCarrinho.valor }}</p>
            <button @click="excluir(index)">Excluir este livro</button>
            <hr>
            <br>
        </div>
        <div v-if="valorTotal >= 0">VALOR TOTAL DO PEDIDO: R$ {{ valorTotal }}</div>
        <div v-else>Seu Carrinho está vazio 😄</div>
        <button v-if="valorTotal > 0" @click="fecharPedido">FECHAR PEDIDO</button>
    </div>
</template>