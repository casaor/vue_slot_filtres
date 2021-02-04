<template>

    <div>

        <modalBootstrap v-if="showModal">

        <template v-slot:header>
            <h5 class="modal-title">Modal con slot</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </template>

        <template v-slot:body>
            <p>{{ 100 | dolares}} son {{ 100 | euros}}</p>
        </template>

        <template v-slot:footer>
            <button type="button" class="btn btn-primary" @click="showModal = false">Aceptar</button>
        </template>

        </modalBootstrap>

        <h3 v-else>Has cerrado el modal</h3>

    </div>


</template>

<script type="text/javascript" src="./../Scripts/padre.js"></script>