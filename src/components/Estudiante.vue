<template>
  <div>
    <h1>CONSULATAR Y ACTUALIZAR ESTUDIANTE</h1>
    <form class="form" action="">
      <p type="Id"><input type="text" /></p>
      <p type="Nombre"><input type="text" /></p>
      <p type="Apellido"><input type="text" /></p>
      <p type="Fecha Nacimiento"><input type="date" /></p>
      <p type="Genero"><input type="text" /></p>
      <button>Consultar</button>
      <button>Actualizar</button>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
p:before {
  content: attr(type);
  display: block;
}
</style>