<template>
  <navBar />
  <router-view />
</template>

<script>
import BienvenidoPage from "./pages/BienvenidoPage.vue";
import router from "./router/router";
import navBar from './components/navBar.vue'
export default {
  name: "App",
  components: {
    navBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
