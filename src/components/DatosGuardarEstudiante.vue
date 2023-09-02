<template>
    <div>
            <div class="datos">
                <div class="mb-3">
                    <label for="" class="form-label">Token:</label>
                    <input class="form-control" type="text" v-model="tokenoken">
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Nombre:</label>
                    <input class="form-control" type="text" v-model="nombre">
                </div>
    
                <div class="mb-3">
                    <label for="" class="form-label">apellido:</label>
                    <input class="form-control" type="text" v-model="apellido">
                </div>
    
                <div class="mb-3">
                    <label for="" class="form-label">cedula:</label>
                    <input class="form-control" type="text" v-model="cedula">
                </div>
            </div>
    
    
            <button v-on:click="registrar" class="btn btn-primary">Guardar</button>
        </div>
    </template>
    
    
    <script>
    import {guardarEstudianteFachada} from '../helpers/EstudianteCliente'
    export default {
        ata() {
            return {
    
                token: null,
                nombre: null,
                apellido: null,
                cedula: null,
    
            }
        },
        methods: {
            registrar() {
                const prod = {
                    codigoBarras: this.codigoBarras,
                    nombre: this.nombre,
                    categoria: this.categoria,
                    stock: this.stock,
                    precio: this.precio,
                }
    
                guardarEstudianteFachada(prod)
            }
        },
    
    }
    </script>
    
    <style>
    .datos{
        width: 300px;
        margin: 15px auto;
    }
    </style>
