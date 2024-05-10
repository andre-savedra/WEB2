<script setup lang="ts">
import { getProdutos } from "~/services/produtos";
import { onMounted } from "vue";
import { type Produto } from "~/models/produtos";
import { type Ref, ref } from "vue";

const produtos: Ref<Array<Produto>> = ref([]);

definePageMeta({
  middleware: "auth",
});

const produtoTeste: Produto = {
  id: 1,
  nome: "Produto Teste",
  preco: 30.5,
  quantidade: 50,
  categoriaFK: {
    id: 1,
    nome: "Regrigerantes",
  },
  fotos: ["https://m.media-amazon.com/images/I/61WGKm79FgL.jpg"],
};

const atualizarProdutos = () => {
  getProdutos().then((produtosEncontrados) => {
    console.log("produtos encontrados: ", produtosEncontrados?.results[0].nome);
    produtos.value = produtosEncontrados?.results ?? [];
  });
};

atualizarProdutos();
</script>

<template>
  <main
   
  class="home-container flex flex-column align-items-center"
  >
    <h2 class="mt-4 mb-4">🥃 Nossos Produtos</h2>
    <div
      class="produtos-container grid align-items-center justify-content-center"
    >
        <div v-for="(produto,index) in produtos">
            <ProdutoItem :key="index" class="col-4" :produto="produto" />
        </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.home-container {
  margin: 0;
  width: 100vw;
  min-height: calc(100vh - 80px);
  background-color: red;
  background-image: url("background1.jpg");
  background-repeat: repeat;
  background-size: cover;
}
</style>
