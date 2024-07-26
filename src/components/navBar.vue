<template>
  <div>
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/inicio">EstudianteEliminar</router-link>
    <router-link to="/final">EstudianteGuardar</router-link>
    <router-link to="/estudiante">Estudiante</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div{
    padding: 0px 30px;

}

/* combinación jerarquica solo elemnto a que tenga padre div */
div a{ 

    color: black;
    margin: 0px 10px;
    border: solid;

}
</style>