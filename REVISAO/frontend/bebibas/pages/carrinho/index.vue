<script setup lang="ts">
import { computed } from "#imports";
import { carrinho, type CarrinhoItem } from "#imports";
const { getCarrinho, removerDoCarinho, getValorTotalDoCarrinho } = carrinho();

definePageMeta({
  middleware: "auth",
});

//pegando os itens que estão no carrinho e salvando
//na variavel
const itensNoCarrinho: Array<CarrinhoItem> = getCarrinho();
const valorTotal = computed(()=> getValorTotalDoCarrinho());

console.log("itens No carrinho.....", itensNoCarrinho);

const deletarDoCarrinho = (itemParaRemover: CarrinhoItem)=> {
    removerDoCarinho({
        produto: itemParaRemover.produto,
        quantidade: 0
    });
}

const salvarPedido = ()=> {
        
}

</script>

<template>
  <main class="carrinho-container flex flex-column align-items-center">
    <h2 class="mt-4 mb-4">🛒 Seu carrinho de compras</h2>
    <table >
        <thead>
            <tr>
              <td>Item</td>
              <td>Produto</td>
              <td>Descrição</td>
              <td>Categoria</td>
              <td>Preço Unitário</td>
              <td>Quantidade</td>
              <td>Subtotal</td>
              <td>Ações</td>
            </tr>
        </thead>
      <tbody>
        <tr v-for="(itemCarrinho ,index) in itensNoCarrinho" :key="index">
          <td>{{ index }}</td>
          <td><img class="fotoProduto" :src="itemCarrinho.produto.fotos[0]" alt="foto produto" /></td>
          <td>{{ itemCarrinho.produto.nome }}</td>
          <td>{{ itemCarrinho.produto.categoriaFK.nome }}</td>
          <td>R$ {{ itemCarrinho.produto.preco }}</td>
          <td>{{ itemCarrinho.quantidade }}</td>
          <td>R$ {{ itemCarrinho.quantidade * itemCarrinho.produto.preco }}</td>
          <td>
            <Button @click="deletarDoCarrinho(itemCarrinho)"  label=""><i class="pi pi-trash"></i></Button>
          </td>
        </tr>
        <section class="flex flex-row align-items-center justify-content-center valor-total ">
            <span class="mr-2">Valor Total: </span>
            <span> R${{ valorTotal }}</span>
        </section>
      </tbody>    
    </table>
    <Button @click="salvarPedido" class="mt-2 botao-pedido bg-primary" label="Fechar pedido"></Button>
    <!-- <div
       class="produtos-container grid align-items-center justify-content-center"
     >
         <div v-for="(produto,index) in produtos">
             <ProdutoItem :key="index" class="col-4" :produto="produto" />
         </div>
     </div> -->

     <!-- <div class="card">
        <DataTable :value="itensNoCarrinho">
          <template #header>
            <div
              class="flex flex-wrap align-items-center justify-content-between gap-2"
            >
              <span class="text-xl text-900 font-bold"
                >🛒 Seu carrinho de compras</span
              >
            </div>
          </template>
          <Column field="produto.nome" header="Nome"></Column>
          <Column header="Image">
            <template #body="slotProps">
              <img
                :src="`${slotProps.data.produto.foto[0]}`"
                :alt="slotProps.data.nome"
                class="w-6rem border-round"
              />
            </template>
          </Column>
        </DataTable>
      </div> -->

  </main>
</template>

<style scoped lang="scss">
.carrinho-container {
  margin: 0;
  width: 100vw;
  min-height: calc(100vh - 80px);
  background-color: red;
  background-image: url("background1.jpg");
  background-repeat: repeat;
  background-size: cover;
}
table{
    background-color: white;
    border-radius: 1rem;
}
thead{
    font-weight: bold;
    tr{
        border-bottom: 2px solid black
    }
}
td{
    padding: 1rem;
}

.fotoProduto{
    width: 50px;
    height: 50px;
}

Button{
    background-color: white;
    color: rgb(114, 15, 15);
    border: none;
}
.valor-total{
    font-weight: bold;
    
}

.botao-pedido{
    width: 250px;
    height: 50px;
}
</style>
