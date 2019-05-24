<template>
  <div class="books">
    <page title="Meus livros">
      <ul class="list">
        <li v-for="book in books" v-bind:key="book.id" v-show="book.cover != ''">
          <book :title="book.book_info.title"
                :subtitle="book.book_info.subtitle"
                :authors="book.book_info.authors"
                :cover="book.book_info.cover"
                :amountPages="book.book_info.amount_pages"
                :rating="book.rating"
                :currentPage="book.current_page"
                btnLabel="Adicionar progresso" />
        </li>
      </ul>
    </page>
  </div>
</template>

<script>
import Page from '@/components/Page.vue';
import Book from '@/components/MyBook.vue';

export default {
  components: {
    Page,
    Book,
  },
  data() {
    return {
      loading: true,
      books: [],
      rating: 0,
      currentPage: 0,
    };
  },
  methods: {
    getBooks() {
      this.$http.get('/getUser?username=Anna Gabriela Carvalho')
        .then((result) => {
          this.loading = false;
          this.books = result.data.reading;
        })
        .catch(err => err);
    },
  },
  created() {
    this.getBooks();
  },
};
</script>

<style scoped>
</style>
