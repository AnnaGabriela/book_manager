<template>
  <main>
    <button id="Button" class="button" @click="func" >
      {{ label }}
    </button>
  </main>
</template>

<script>
export default {
  props: {
    label: String,
    func: Function,
  },
};
</script>

<style>
.button {
  color: white;
  background-color: #D2CBBB;
  border: transparent;
  padding: 10px 40px;
  border-radius: 5px;
}
</style>
