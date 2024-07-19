<template>
  <div class="container">
    <h1>GUARDAR ESTUDIANTE</h1>
    <div class="formulario">
      <form class="form" action="">
        <p type="Cedula"><input type="text" /></p>
        <p type="Nombre"><input type="text" /></p>
        <p type="Apellido"><input type="text" /></p>
        <p type="Fecha Nacimiento">
          <input id="idFechaNacimiento" type="date" />
        </p>
        <p type="Genero"><input type="text" /></p>
        <button>GUARDAR</button>
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