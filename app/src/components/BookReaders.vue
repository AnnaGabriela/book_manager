<template>
  <main>
    <ul>
      <li v-for="user in users" v-bind:key="user.id" class="user">
        <img :src="user.picture" alt="User picture" class="picture">
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  props: {
    users: Array,
  },
};
</script>

<style scoped>
.user {
  display: inline;
  margin-right: 10px;
}

.picture {
  width: 50px;
  border-radius: 50%;
}
</style>
