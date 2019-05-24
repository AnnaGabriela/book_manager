<template>
  <main class="book">
    <b-row>
      <b-col sm="2">
        <img :src=cover class="cover" alt="Book cover">
      </b-col>
      <b-col sm="5">
        <h1 class="title"><b>{{ title }}</b></h1>
        <h2 class="subtitle">{{ subtitle }}</h2>
        <ul>
          <li v-for="author in authors" v-bind:key="author.id">
            <h3 class="authors">{{ author }}</h3>
          </li>
        </ul><br>
        <star-rating :rating="rating"
                    :read-only=true
                    :show-rating=false
                    :star-size=20>
        </star-rating><br>
        <span class="progress-number">{{ currentPage }}/{{ amountPages }} páginas</span>
        <b-progress :value="progress"
                    :max=100
                    class="w-50"
                    variant="secondary">
        </b-progress>
      </b-col>
      <b-col class="right">
        <p>Usuários lendo: </p>
        <book-readers :users="users" />
        <br><br>
        <my-button :label="btnLabel" :func="addProgress"/>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import swal from 'sweetalert';
import MyButton from '@/components/Button.vue';
import BookReaders from '@/components/BookReaders.vue';

export default {
  components: {
    MyButton,
    BookReaders,
  },
  props: {
    title: String,
    subtitle: String,
    authors: Array,
    cover: String,
    rating: Number,
    currentPage: Number,
    amountPages: Number,
    btnLabel: String,
  },
  data() {
    return {
      progress: ((this.currentPage) / (this.amountPages)) * 100,
      comment: '',
      users: [],
    };
  },
  methods: {
    addProgress(evt) {
      evt.preventDefault();
      swal({
        text: 'Adicionar progresso',
        content: {
          element: 'input',
          attributes: {
            placeholder: 'Digite a página atual',
            type: 'number',
          },
        },
        button: {
          text: 'Atualizar',
          closeModal: false,
        },
      })
        .then((page) => {
          swal({
            text: 'Adicionar nota',
            content: {
              element: 'input',
              attributes: {
                placeholder: 'Digite a nota de 0 a 5',
                type: 'number',
              },
            },
            button: {
              text: 'Atualizar',
              closeModal: false,
            },
          })
            .then((grade) => {
              const progress = JSON.stringify({
                username: 'Anna Gabriela Carvalho',
                title: this.title,
                rating: grade,
                current_page: page,
                comment: this.comment,
              });
              this.$http.post('/updateProgress', { progress });
            })
            .then(() => {
              swal('Progresso atualizado!', '', 'success')
                .then(() => window.location.reload());
            })
            .catch(() => swal('Ocorreu um erro!', '', 'error'));
        });
    },
    findBookReaders(bookTitle) {
      this.$http.get(`/findBookReaders?bookTitle=${bookTitle}`)
        .then((users) => {
          this.users = users.data;
        }).catch(err => err);
    },
  },
  created() {
    this.findBookReaders(this.title);
  },
};
</script>

<style scoped>
.book {
  padding: 2% 5%;
}

.cover { width: 130px; }

.title { font-size: 1.3em; }

.subtitle { font-size: 1em; }

.authors {
  font-size: 0.9em;
  display: inline;
}

.progress-number { font-size: 0.8em; }

.right { margin-left: 150px; }
</style>
