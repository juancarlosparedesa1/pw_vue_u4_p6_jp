import axios from "axios";

//Metodos de consumo del API

//fethc
const obtenerPorCedula = async (cedula) => {
    const data = await fetch(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}/buscarPorCedula`).then(r => r.json());
    console.log(data);
    return data;
}
//axios
const obtenerPorCedulaAxios = async (cedula) => {

    const data = axios.get(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}/buscarPorCedula`).then(r => r.data);
    console.log(data);
    return data;
}

//guardar
const guardar = async (estudianteBody) => {
    const data = axios.post(`http://localhost:8082/API/v1.0/Matricula/estudiantes`, estudianteBody).then(r => r.data);
    console.log(data);
    return data;
}

//actualizar
const actualizar = async (cedula, estudianteBody) => {
    axios.put(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}/actualizarPorCedula`.then(r => r.data));
    console.log(data);
    return data;
}

//actualizarParcial-patch
//actualizar
const actualizarParcial = async (cedula, estudianteBody) => {
    axios.patch(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}/actualizarPorCedula`.then(r => r.data));
    console.log(data);
    return data;
}
//eliminar
export const EstudianteEliminar = (cedula) => {
    axios.delete(`http://localhost:8082/API/v1.0/Matricula/estudiantes/${cedula}/borrarPorCedula`.then(r => r.data))
    console.log(data);
    return data;
}




//Metodos de fachada

//Metodos de consumo del API

//fethc
export const obtenerPorCedulafachada = async (cedula) => {
    return await obtenerPorCedula(cedula);
}
//axios
export const obtenerPorCedulaAxiosFachada = async (cedula) => {
    return await obtenerPorCedula(cedula);
}

//guardar
export const guardarFachada = async (estudianteBody) => {
    return await guardar(estudianteBody);
}

//actualizar
export const actualizarFachada = async (cedula, estudianteBody) => {
    return await actualizar(cedula, estudianteBody);
}

//actualizarParcial-patch
//actualizar
const actualizarParcialFachada = async (cedula, estudianteBody) => {
    return await actualizarParcial(cedula, estudianteBody);
}
//eliminar
export const EstudianteEliminarFachada = async (cedula) => {
    return await EstudianteEliminar(cedula);
}

