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
  data(){
    cedula:null
  },
  components: {
    Estudiante,
    EstudianteEliminar,
    EstudianteGuardar,
  },
  created(){
    console.log(this.$route)
   /*  console.log(this.$route.params.cedula)
    if(this.$route.params.cedula!=='vacio'){
      this.cedula=this.$route.params.cedula();
    } */
  }

};
</script>

<style>
.componentes {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>