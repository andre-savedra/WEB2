<script setup lang="ts">
import { type Ref, ref } from "vue";
import { type Produto } from "~/models/produtos";
import { getProduto } from "~/services/produtos";
const route = useRoute();

const produto: Ref<Produto|null> = ref(null);
    
const atualizarProduto = () => {
  if(route.params.id){
    getProduto(route.params.id as string).then((produtoEncontrado) => {
      console.log("produto encontrado: ", produtoEncontrado);
      produto.value = produtoEncontrado ?? null;
    });
  }
};

atualizarProduto();
</script>

<template>
    

</template>