<template>
      <DatosGuardarEstudiante></DatosGuardarEstudiante>
    <ListaGuardarEstudiante></ListaGuardarEstudiante>
</template>

<script>
import DatosGuardarEstudiante from '../components/DatosGuardarEstudiante.vue';
import ListaGuardarEstudiante from '../components/ListaGuardarEstudiante.vue';
import { guardarEstudianteFachada } from '../helpers/EstudianteCliente'
export default {
    
       components: {
        DatosGuardarEstudiante,
        ListaGuardarEstudiante
    }

}
</script>

<style>
.datos {
    width: 300px;
    margin: 15px auto;
}
</style>

