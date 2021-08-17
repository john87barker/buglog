<template>
  <header class="center">
    <Navbar />
  </header>
  <main class="container-fluid bg-grey">
    <router-view />
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-3 fixed-bottom">
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
@media only screen and (max-width: 500px){
.left{
  text-align: right;
  justify-content: end;
}
.center{
  text-align: start;
  justify-self: unset;
}
}
</style>
