<template>
  <b-card class="card text-right">
      <p class="card-title">{{ title }}</p>
      <hr class="line">
      <h1 class="card-value">{{ value }}</h1>
  </b-card>
</template>

<script>
export default {
  props: {
    title: String,
    value: String,
  },
};
</script>

<style scoped>
.card {
  font-family: 'Roboto';
  margin: 15px;
  color: #707070;
}

.card-title {
  font-size: .8em;
  text-align: center;
  margin: 0;
  text-transform: uppercase;
}

.card-value {
  text-align: center;
  margin: 0;
  font-weight: 900;
  font-size: 2.4em;
  color: rgb(54, 54, 54);
}
</style>
