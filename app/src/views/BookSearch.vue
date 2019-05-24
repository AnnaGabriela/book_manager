<template>
  <div class="books">
    <page title="Adicionar novo livro">
      <b-form @submit="getBooks">
        <b-form-input
          v-model="searchQuery"
          class="search"
          required
          placeholder="Digite o título do livro ou o autor">
        </b-form-input>
      </b-form>
      <b-spinner label="Spinning" class="loading" v-show="loading"></b-spinner>
    </page>
    <ul class="list">
      <li v-for="book in books" v-bind:key="book.id" v-show="book.cover != ''">
          <book :title="book.title"
                :subtitle="book.subtitle"
                :authors="book.authors"
                :cover="book.cover"
                :amountPages="book.pages"
                btnLabel="Adicionar livro" />
      </li>
    </ul>
  </div>
</template>

<script>
import Page from '@/components/Page.vue';
import Book from '@/components/NewBook.vue';

export default {
  components: {
    Page,
    Book,
  },
  data() {
    return {
      books: [],
      searchQuery: '',
      loading: false,
    };
  },
  methods: {
    getBooks(evt) {
      this.books = [];
      this.loading = true;
      evt.preventDefault();
      this.$http.get(`/search?bookString=${this.searchQuery}`)
        .then((result) => {
          this.books = (result.data).map((obj) => {
            let cover;
            if (!obj.volumeInfo.imageLinks) cover = '';
            else cover = obj.volumeInfo.imageLinks.thumbnail;
            return {
              title: obj.volumeInfo.title,
              subtitle: obj.volumeInfo.subtitle,
              authors: obj.volumeInfo.authors,
              cover,
              pages: obj.volumeInfo.pageCount,
            };
          });
          this.loading = false;
        })
        .catch(err => err);
    },
  },
};
</script>

<style scoped>
.search {
  width: 95%;
  margin: auto auto 15px;
}

.loading {
  margin: 100px auto;
  display: block;
}

.list {
  list-style: none;
}
</style>
