<script setup lang="ts">
import type { Livro } from '~/models/livro';
import { getLivros } from '../services/livro';
import {carrinhoStore} from '~/stores/carrinho';
const {estaNoCarrinho,adicionarNoCarrinho} = carrinhoStore();

//import { type Ref, ref } from 'vue';
//import { isAuthenticated } from 'vue'; // Importe a função que verifica o estado de autenticação do usuário

//const { data: livrosRespostaBack } = await useFetch('http://localhost:8000/api/livros');
//const livrosRecebidos = livrosRespostaBack.value as Array<Livro>; //Livro[]

//Ref --->  dizer para o typescript o tipo do ref (nesse caso é uma array de livros)
//ref ---> dá a reatividade da variável comunicando html e script
const livrosRecebidos: Ref<Array<Livro>> = ref([]); //começa com array vazio


//opcao1
//livrosRecebidos.value = await getLivros();
//opcao2
getLivros().then((livrosRespostaBack)=>{
    livrosRecebidos.value = livrosRespostaBack;
});



    
const emprestar = (livroParaEmprestar: Livro) => {
    adicionarNoCarrinho(livroParaEmprestar);
    //navigateTo('/login');
    /*if (isAuthenticated()) {
        navigateTo('/login');
    } else {
        navigateTo('/carrinho');
    }*/
}


</script>

<template>
    <div><br><br><br>
        <section class="card-container">
            <div v-for="livro in livrosRecebidos" :key="livro.id" class="card-wrapper">

                <Card class="ok" style="width: 25rem; overflow: hidden">
                 
                    <template #header>
                        <NuxtLink :to="`/${livro.id}`">
                            <img class="imgLivro" alt="Capa Livro" :src="livro.fotoCapa" /> </NuxtLink> <br/><br><br>
                    </template>
                    <template #title>{{ livro.titulo }}</template>
                    <template #subtitle>{{ livro.autor }}</template>
                    <template #footer>
                    <div class="flex gap-3 mt-1">
                        <div class="w-full pi pi-star">
                        <label >{{ livro.avaliacao }}</label><br>
                        <label >R$ {{ livro.valor }}</label><br>
                        <label >Quantidade: {{ livro.quantidade }}</label><br>
                        <!-- <Checkbox :binary="true" v-model="" :readonly="true"/> -->
                        <label v-if="estaNoCarrinho(livro)"> ADICIONADO!</label><br>
                        </div>
                        <!-- <Button label="Cancel" severity="secondary" outlined class="w-full" /> -->
                        
                        <!-- <Button label="Emprestar" class="w-full" @click="emprestar" /> -->
                        <Button v-if="livro.quantidade === 0" :disabled="true" label="Emprestar" class="w-full" @click="emprestar(livro)" />
                        <Button v-else label="Emprestar" class="w-full" @click="emprestar(livro)" />

                    </div>
                    </template>
                </Card>
                
            </div>
        </section>
    </div>
</template>

<style>
/* .ok {
    background-color: rgb(228, 228, 228);
} */
.card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 16px; /* Espaçamento entre os cards */
    justify-content: center; /* Centraliza os cards horizontalmente */
}


.card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.imgLivro {
    width: 100%; /* Faz a imagem ocupar toda a largura disponível */
    height: 300px; /* Define uma altura fixa para a imagem */
    object-fit: cover; /* Mantém a proporção da imagem, preenchendo a área */
    display: block; /* Garante que a imagem se comporte como um bloco */
}

.card-footer .flex {
    display: flex;
    gap: 10px;
}

.w-full {
    width: 100%;
}

.mt-1 {
    margin-top: 8px;
}
</style>
