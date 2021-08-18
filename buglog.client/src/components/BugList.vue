<template>
  <div class="component col-md-12 bg-dark-grey px-5 list pt-3 mb-4">
    <div class="row py-3 bg-primary shadow mb-3 bug text-light rounded right" v-for="b in bugs" :key="b.id">
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
  color: red($color: #000000);
  text-shadow: 1px 1px  red;
}
.green{
  color: green($color: #000000);
  text-shadow: 1px 1px  green;
}

</style>
