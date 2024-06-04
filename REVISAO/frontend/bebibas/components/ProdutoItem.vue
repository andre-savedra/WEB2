<script setup lang="ts">
import { computed } from "#imports";
import { type Produto } from "~/models/produtos";
import { carrinho } from "#imports";
const { adicionarNoCarrinho, getCarrinho, estaNoCarrinho } = carrinho();

type propType = {
  produto: Produto;
};


const props = defineProps<propType>();

const emit = defineEmits(['eventoAdicionado']); 

const adicionarItem = () => {
  adicionarNoCarrinho(props.produto);
  emit('eventoAdicionado');
  console.log("CARRINHO ATUAL: ", getCarrinho());
}

const produtoNoCarrinho = computed(()=>{
  return estaNoCarrinho(props.produto);   
});

const detalheProduto = ()=>{
    const idProduto = props.produto.id;
    navigateTo(`/home/${idProduto}`);
}

</script>

<template>
  <section class="cartao flex flex-column align-items-center justify-content-center" v-if="props.produto">
    <div class="check text-right">      
      <Checkbox v-model="produtoNoCarrinho" :binary="true" :readonly="true"/>
    </div>
    <div class="produto-imagem" @click="detalheProduto">
      <img :src="props.produto.fotos[0]" />
    </div>
    <div>
      <h4 class="produto-nome">{{ props.produto.nome }}</h4>
    </div>
    <div class="flex flex-row">
      <span>R${{ props.produto.preco }} - </span>
      <div class="ml-2">
        <label>Qtd. Disponível: </label>
        <span>{{ props.produto.quantidade }} </span>
      </div>
    </div>
    <Button :disabled="!props.produto.quantidade" @click="adicionarItem" class="botao-add" 
        :label="props.produto.quantidade? 'Adicionar' : 'Não disponível'" />
  </section>
</template>

<style scoped lang="scss">
.cartao {
  width: 300px;
  max-width: 300px;
  height: 350px;
  max-height: 350px;
  background-color: white;
  border-radius: 1.5rem;
  margin: 1.5rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: 2s;
  }

  .produto-imagem {
    width: 90%;
    height: 55%;
    max-width: 200px;
    max-height: 230px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .produto-nome{
    margin: 0.5rem;
  }

  .botao-add {
    width: 80%;
    height: 2rem;
    margin: 1rem;
  }

  .check{
    width: 95%;
    
  }
}
</style>
