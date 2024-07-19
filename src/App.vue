<template>
  <EstudiantesPage />
</template>

<script>
import EstudiantesPage from "./pages/EstudiantesPage.vue";

export default {
  name: "App",
  components: {
    EstudiantesPage,
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
