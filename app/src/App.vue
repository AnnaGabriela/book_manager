<template>
  <div class="wrapper">
    <navbar/>
    <div>
      <sidenav class="sidenav"/>
      <router-view class="content"/>
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidenav from './components/Sidenav.vue';

export default {
  name: 'app',
  components: {
    Navbar,
    Sidenav,
  },
};
</script>


<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #5E6C54;
  display: block;
  width: 100%;
}

body {
  margin: 0;
  padding: 0;
}

.content {
  width: 80%;
  height: 100vh;
  float: right;
  overflow-y: scroll;
}

.sidenav {
  width: 20%;
  float: left;
}

ul {
  padding: 0;
  list-style: none;
}
</style>
