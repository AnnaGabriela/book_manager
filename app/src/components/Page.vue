<template>
  <div class="container">
    <h1 class="title" v-if="title">{{ title }}</h1>
    <hr class="line" v-if="title">
    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style scoped>
.title {
  padding: 0 20px;
  color: rgb(54, 54, 54);
  font-size: 1.8em;
  margin: 40px 0 0;
}

.slot p {
  text-align: justify;
  color: #606060;
  font-size: 16px;
}

.line {
  margin: 20px 15px 30px;
}
</style>
