<template>
  <div class="component col-md-10 offset-1 bg-dark-grey px-5 list pt-3 ">
    <!-- Hard Coded lists row 1 -->
    <div class="row py-3 bg-primary shadow mb-2" v-for="b in bugs" :key="b.id" :bug="b">
      <div class="col-md-3 text-left">
        {{ b.title }}
      </div>
      <div class="col-md-3">
        {{ b.creator.name }}
      </div>
      <div class="col-md-3 text-right pr-3">
        {{ new Date(b.createdAt).toLocaleDateString() }}
      </div>
      <div class="col-md-3 text-right pr-5">
        {{ b.closed }}
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'Component',
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
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
</style>
