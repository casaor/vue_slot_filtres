<template>

    <div>

        <button type="button" class="btn btn-primary" @click="showModal = !showModal">Activa el modal</button>
        
        <backInDown> 
            <!-- <transition name="backInDown" enter-active-class="animate__animated animate__backInDown leave-active-class="animate__animated animate__backOutDown"> -->

            <modalBootstrap v-if="showModal">

                <template v-slot:header>
                    <h5 class="modal-title">Modal con slot</h5>
                    <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
                </template>

                <template v-slot:body>
                    <p>{{ 100 | dolares}} son {{ 100 | euros}}</p>
                </template>

                <template v-slot:footer>
                    <button type="button" class="btn btn-primary" @click="showModal = false">Cerrar</button>
                </template>

            </modalBootstrap>

        </backInDown>
        <!-- </transition> -->
        <!-- <h4>Has cerrado el modal</h4> -->

    </div>


</template>

<script type="text/javascript" src="./../Scripts/padre.js"></script>