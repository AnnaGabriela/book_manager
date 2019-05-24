<template>
  <main>
    <router-link to="/">
      <img src="@/assets/profile.png" class="profile-pic"/>
    </router-link>
    <h1 class="title">{{ name }}</h1>
    <h2 class="subtitle">{{ country }}</h2>
    <hr class="line">
  </main>
</template>

<script>
export default {
  data() {
    return {
      name: 'Anna Gabriela Carvalho',
      country: 'Brasil',
    };
  },
};
</script>


<style scoped>
.profile-pic {
  width: 60%;
  border-radius: 50%;
  display: block;
  margin: 10px auto 20px;
}

.title {
  color:rgb(54, 54, 54);
  font-size: 1em;
  text-align: center;
  margin-bottom: 0;
  font-weight: bold;
}

.subtitle {
  color:rgb(54, 54, 54);
  font-size: 1em;
  text-align: center;
  margin: 3px auto 25px;
  font-weight: 200;
}
</style>
