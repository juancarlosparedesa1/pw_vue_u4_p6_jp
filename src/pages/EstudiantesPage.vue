<template>
  <div class="componentes">
    <h1>PAGINA ESTUDIANTES</h1>
    <Estudiante />
    <EstudianteEliminar />
    <EstudianteGuardar />
  </div>
</template>

<script>
import Estudiante from "../components/Estudiante.vue";
import EstudianteEliminar from "../components/EstudianteEliminar.vue";
import EstudianteGuardar from '../components/EstudianteGuardar.vue'
export default {
  components: {
    Estudiante,
    EstudianteEliminar,
    EstudianteGuardar,
  },
};
</script>

<style>
.componentes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>