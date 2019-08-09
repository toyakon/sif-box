<template>
  <div id="app">
    <SifBox />
  </div>
</template>

<script>
import SifBox from "./components/SifBox.vue";

export default {
  name: "app",
  components: {
    SifBox
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
