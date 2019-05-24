<template>
  <main class="book">
    <b-row>
      <b-col sm="2">
        <img :src=cover class="cover" alt="Book cover">
      </b-col>
      <b-col sm="4">
        <h1 class="title"><b>{{ title }}</b></h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
        <h3 class="pages">{{ amountPages }} páginas</h3>
        <ul>
          <li v-for="author in authors" v-bind:key="author.id">
            <h3 class="authors">{{ author }}</h3>
          </li>
        </ul><br>
        <my-button :label="btnLabel" :func="addBook" v-show="!success" />
      </b-col>
    </b-row>
  </main>
</template>

<script>
import swal from 'sweetalert';
import MyButton from '@/components/Button.vue';

export default {
  components: {
    MyButton,
  },
  data() {
    return {
      success: false,
    };
  },
  props: {
    title: String,
    subtitle: String,
    authors: Array,
    cover: String,
    btnLabel: String,
    amountPages: Number,
  },
  methods: {
    addBook(evt) {
      evt.preventDefault();
      const book = {
        title: this.title,
        subtitle: this.subtitle,
        authors: this.authors,
        cover: this.cover,
        amount_pages: this.amountPages,
      };
      const username = 'Anna Gabriela Carvalho';
      const bookStr = JSON.stringify(book);
      this.$http.post('/addUserBook', { username, book: bookStr })
        .then(res => res)
        .catch(err => err);
      swal('Livro adicionado!', '', 'success');
    },
  },
};
</script>

<style scoped>
.book { padding: 2% 5%; }

.cover { width: 130px; }

.title { font-size: 1.3em; }

.subtitle { font-size: 1em; }

.authors {
  font-size: 0.9em;
  display: inline;
}

.pages { font-size: 0.8em; }

.green { background-color: rgba(7, 77, 7, 0.582); }
</style>
