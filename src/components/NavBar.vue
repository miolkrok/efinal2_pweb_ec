<template>
    <nav>
        <router-link to="/token">GenerarToken Token</router-link> |
        <router-link to="/estudiante">Guardar Estudiante</router-link>
    </nav>
</template>

<script>
import GenerarToken from '../pages/GenerarToken'
import GuardarEstudiante from '../pages/GuardarEstudiante'
export default {
    components: {
        GenerarToken,
        GuardarEstudiante
    }
}
</script>

<style></style>