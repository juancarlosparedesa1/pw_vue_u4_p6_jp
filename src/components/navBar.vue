<template>
  <div>
    <router-link to="/">Bienvenida</router-link>
    <router-link to="/inicio">EstudianteEliminar</router-link>
    <router-link to="/final">EstudianteGuardar</router-link>
      <!--    los dos hacen lo mismo las dos declaraciones
 -->
    <!--     <router-link :to="{path='/estudiante',params:{cedula:'1234'}}">Estudiante</router-link>
 -->
    <router-link
      :to="{
        name: 'estudiante',
        params: { cedula: '1234' },
      }"
      >Estudiante</router-link
    >

    <router-link :to="{ path: '/estudiante', query: { cedula: '1234' } }"
      >Estudiante</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  padding: 0px 30px;
}

/* combinación jerarquica solo elemnto a que tenga padre div */
div a {
  color: black;
  margin: 0px 10px;
  border: solid;
}
</style>