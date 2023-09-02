<template>
    <div >
    <div class="form-floating mb-3">
        <label for="">Semilla</label>
        <input v-model="token" type="text">
    </div>
    <div class="form-floating mb-3">
        <label for="">Tiempo de Vigencia</label>
        <input v-model="nombre" type="text">

    </div>
    <div class="form-floating mb-3">
        <label for="">Token</label>
        <input v-model="apellido" type="text">

    </div>
    <button>Generar</button>
  </div>
  <div v-if="token">Token generado es: {{token}}</div>
</template>

<script>
export default {

    data(){
        return{
            semilla:null,
            tiempoVigencia: null,
            token:null
        }
    }

}
</script>

<style>

</style>