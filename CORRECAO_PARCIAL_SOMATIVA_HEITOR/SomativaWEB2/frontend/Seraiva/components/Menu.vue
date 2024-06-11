<script setup lang="ts">

import { ref } from "vue";


</script>




<template>

    <header>
        <div class="flex align-items-center justify-content-center">
            <div class="menu-item flex align-items-center justify-content-center mr-4">
              <i class="pi pi-home mr-1"></i>
              <NuxtLink to="/">Home</NuxtLink>
            </div>
            <div class="menu-item flex align-items-center justify-content-center mr-4">
              <i class="pi pi-book mr-1"></i>
              <NuxtLink to="/cadastroLivros">Cadastro de Livros</NuxtLink>
            </div>
            <div class="menu-item flex align-items-center justify-content-center mr-4">
              <i class="pi pi-shopping-cart mr-1"></i>
              <NuxtLink to="/carrinho">Carrinho</NuxtLink>
            </div>
            <div class="menu-item flex align-items-center justify-content-center mr-4">
              <i class="pi pi-sign-out mr-1"></i>
              <NuxtLink to="/login">Sair</NuxtLink>
            </div>
        </div>
    </header>

</template>



<style scoped lang="scss">
    
    .flex{
        background-color: black;
    }
    header{
        width: 100vw;
        height: var(--altura-header);
        border: none;
       // border-bottom: 1px solid;

  
    .menu-item{
      height: var(--altura-header);
      color: rgb(255, 255, 255);
      
      a{
        text-decoration: none;
        color: rgb(255, 255, 255);
      }
      &:hover{
        transform: scale(1.01);
      }
    }
  }

    



</style>