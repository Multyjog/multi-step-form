<template>
  <Form />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Form from "./views/Form-View.vue";

export default defineComponent({
  name: "App",
  components: {
    Form,
  },
});
</script>

<style lang="scss">
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
