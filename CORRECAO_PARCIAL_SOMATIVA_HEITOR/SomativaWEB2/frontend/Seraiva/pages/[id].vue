<script setup>
    const route = useRoute();
    const url = 'http://localhost:8000/api/livros/';

    const {data: livro} = await useFetch(`${url}${route.params.id}`);

    console.log(`${url}${route.params.id}`);
    console.log(livro);
</script>

<template>
    <div>
        <!-- <strong>ID:{{livros.id}}</strong><br> -->
        <strong>{{ livro.titulo }}</strong><br>
        <strong>Autor:{{livro.autor}}</strong><br>
        <strong>Descrição:{{livro.descricao}}</strong><br>
        <img :src="livro.fotoCapa">


    </div>
</template>

<!-- <script setup>
import { useRoute, useFetch } from 'nuxt/app';

const route = useRoute();
const url = 'http://localhost:8000/api/livros/';

const { data: livros } = await useFetch(() => `${url}${route.params.id}`);
</script>

<template>
  <div>
    <strong>ID: {{ livros.value.id }}</strong><br>
    <strong>Nome: {{ livros.value.titulo }}</strong><br>
    <strong>Categoria: {{ livros.value.autor }}</strong><br>
    <strong>Descrição: {{ livros.value.descricao }}</strong><br>
    <img :src="`http://localhost:8000/api/livros${livros.value.fotoCapa}`" height="200" width="200">
  </div>
</template> -->
