<template>
    <div class="container">
      <h1>Cadastro de Livro</h1>
      <form @submit.prevent="submitForm">
        <div class="form-group">
          <label for="titulo">Título</label>
          <input type="text" id="titulo" v-model="livro.titulo" required />
        </div>
        <div class="form-group">
          <label for="paginas">Páginas</label>
          <input type="number" id="paginas" v-model="livro.paginas" required />
        </div>
        <div class="form-group">
          <label for="descricao">Descrição</label>
          <textarea id="descricao" v-model="livro.descricao" required></textarea>
        </div>
        <div class="form-group">
          <label for="formato">Formato</label>
          <select id="formato" v-model="livro.formato" required>
            <option value="E">Ebook</option>
            <option value="F">Físico</option>
          </select>
        </div>
        <div class="form-group">
          <label for="status">Status</label>
          <select id="status" v-model="livro.status" required>
            <option value="P">Pendente</option>
            <option value="A">Aprovado</option>
            <option value="C">Cancelado</option>
          </select>
        </div>
        <div class="form-group">
          <label for="edicao">Edição</label>
          <input type="number" id="edicao" v-model="livro.edicao" required />
        </div>
        <div class="form-group">
          <label for="autor">Autor</label>
          <input type="text" id="autor" v-model="livro.autor" required />
        </div>
        <div class="form-group">
          <label for="anoPublicacao">Ano de Publicação</label>
          <input type="text" id="anoPublicacao" v-model="livro.anoPublicacao" required />
        </div>
        <div class="form-group">
          <label for="quantidade">Quantidade</label>
          <input type="number" id="quantidade" v-model="livro.quantidade" required />
        </div>
        <div class="form-group">
          <label for="valor">Valor</label>
          <input type="number" step="0.01" id="valor" v-model="livro.valor" required />
        </div>
        <div class="form-group">
          <label for="fotoCapa">Foto da Capa</label>
          <input type="text" id="fotoCapa" v-model="livro.fotoCapa" required placeholder="Url da Imagem" />
        </div>
        <div class="form-group">
          <label for="avaliacao">Avaliação</label>
          <input type="number" step="0.1" id="avaliacao" v-model="livro.avaliacao" required placeholder="0 ~ 5" max="5"/>
        </div>
        <div class="form-group">
          <label for="categoriFK">Categoria</label>
          <input type="number" id="categoriFK" v-model="livro.categoriFK" required placeholder="1 - Romance, 2 - Terror, 3 - Finanças">
        </input>
        </div>
        <Button type="submit">Cadastrar Livro</Button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useFetch } from '#app';

  definePageMeta({
  middleware: "auth",
});
  
  const livro = ref({
    titulo: '',
    paginas: 0,
    descricao: '',
    formato: 'F',
    status: 'P',
    edicao: 0,
    autor: '',
    anoPublicacao: '',
    quantidade: 0,
    valor: 0.0,
    fotoCapa: '',
    avaliacao: null,
    categoriFK: null,
  });
  const router = useRouter();
   
  const submitForm = async () => {
    try {
      const { error } = await useFetch('http://localhost:8000/api/livros/', {
        method: 'POST',
        body: livro.value,
      });
  
      if (error.value) {
        console.error('Erro ao cadastrar o livro:', error.value);
        alert('Ocorreu um erro ao cadastrar o livro. Por favor, tente novamente.');
      } else {
        alert('Livro cadastrado com sucesso!');
        router.push('/'); // Redireciona para a página inicial após o cadastro
      }
    } catch (error) {
      console.error('Erro ao cadastrar o livro:', error);
      alert('Ocorreu um erro ao cadastrar o livro. Por favor, tente novamente.');
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }

  Button:hover {
    background-color: #14a33f;
  }
  </style>
  