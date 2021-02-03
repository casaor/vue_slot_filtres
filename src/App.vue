<template>

  <div id="app">

    <img alt="Vue logo" src="./assets/logo.png">

    <modalBootstrap>

      <template v-slot:header>
        <h5 class="modal-title">Modal con slot</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </template>

      <template v-slot:body>
        <p>100$ son 81.41€</p>
      </template>

      <template v-slot:footer>
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cierra</button>
        <button type="button" class="btn btn-primary">Guarda cambios</button>
      </template>

    </modalBootstrap>

  </div>

</template>

<script type="text/javascript" src="./app.js"></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
