<template>
  <div class="container">
    <h1>ELIMINAR ESTUDIANTE</h1>
    <div class="formulario">
      <form class="form" action="">
        <p type="Cedula"><input type="text" /></p>
        <button>Eliminar</button>
      </form>
    </div>
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
p {
  display: block;
  text-align: left;
}
.formulario {
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  border: 1px solid black;
}
</style>