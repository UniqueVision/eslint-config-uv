<template>
  <div>
    Hello, world!
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  props: {

    /**
     * Some description.
     */
    value: {
      type: String,
      default: '',
    },
  },
  setup() {
    const x = {
      x: 5,
    };

    return {
      x,
      y: 5,
    };
  },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
