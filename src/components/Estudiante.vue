<template>
  <div>
    <div class="container">
      <h1>CONSULTAR Y ACTUALIZAR ESTUDIANTE</h1>
      <div class="formulario">
        <form class="form" action="">
          <p type="Cedula"><input v-model="cedula" type="text" /></p>
          <p type="Nombre"><input type="text" /></p>
          <p type="Apellido"><input type="text" /></p>
          <p type="Fecha Nacimiento">
            <input id="idFechaNacimiento" type="date" />
          </p>
          <p type="Genero"><input type="text" /></p>
          <button v-on:click="consultar">Consultar</button>
          <button>Actualizar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {
  obtenerPorCedulaAxiosFachada,
  actualizarFachada,
} from "../clients/clienteEstudiante.js";
export default {
  data() {
    return {
      cedula: null,
    };
  },
  methods: {
    async consultar() {
      console.log(this.cedula);
      const data = await obtenerPorCedulaAxiosFachada(this.cedula);
      console.log(data);
    },
  },
};
</script>

<style>
p:before {
  content: attr(type);
  display: block;
}
#idFechaNacimiento {
  width: 165px;
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
  padding: 10px;
}
</style>