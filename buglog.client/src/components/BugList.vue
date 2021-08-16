<template>
  <div class="component col-md-10 offset-1 bg-dark-grey px-5 list pt-3 mb-5">
    <div class="row py-3 bg-primary shadow mb-3 bug text-light" v-for="b in bugs" :key="b.id">
      <Bug :bug="b" />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'Component',

  setup() {
    return {
      bugs: computed(() => AppState.bugs)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.list{
  min-height: 58vh;
}
.bug:hover{
  color: #003566;
  transform: scale(1.02);
  cursor: pointer;
}
.red{
  color: red;
  text-shadow: 1px 1px  black;
}
.green{
  color: green;
  text-shadow: 1px 1px  black;
}

</style>
