<template>
  <div class="home">
    <page title="Meu perfil">
      <b-card-group deck class="cards">
        <card title="Livros Lidos" value="40"/>
        <card title="Estou lendo" value="3"/>
        <card title="Quero ler" value="50"/>
        <card title="Desisti" value="10"/>
      </b-card-group>
    </page>
  </div>
</template>

<script>
import Page from '@/components/Page.vue';
import Card from '@/components/Card.vue';

export default {
  components: {
    Page,
    Card,
  },
};
</script>

<style scoped>
.home {
  width: 80%;
}

.cards {
  margin: auto;
}
</style>
