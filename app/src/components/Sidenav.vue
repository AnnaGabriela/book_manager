<template>
  <div class="sidenav">
    <user-data/>
    <div class="nav">
      <router-link to="/"> Início </router-link>
      <router-link to='/adicionar'> Adicionar livro </router-link>
      <router-link to='/livros'> Meus livros </router-link>
    </div>
  </div>
</template>

<script>
import UserData from '@/components/UserData.vue';

export default {
  components: {
    UserData,
  },
};
</script>

<style scoped>
.sidenav {
  width: 20%;
  padding: 2%;
  height: 100vh;
  background-color: rgb(252, 247, 245);
}

.nav {
  display: block;
  margin-top: 40px;
}

.nav a {
  display: block;
  color:rgb(54, 54, 54);
  text-decoration: none;
  font-size: 1em;
  text-align: center;
  margin: 20% 0 0 0%;
}

.nav a:hover {
  color: black;
}
</style>
