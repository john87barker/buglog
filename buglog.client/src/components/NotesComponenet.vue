<template>
  <div class="row">
    <div class="BugNotes col-md-12  bg-primary px-5 list py-3 shadow mt-3" v-for="note in notes" :key="note.id">
      <div class="m-2">
        <div class="row">
          <div class="col-md-4 border border-secondary d-flex pb-2">
            <div>
              <img :src="note.creator.picture" alt="" class="pic mr-3">
            </div>
            <div>
              {{ note.creator.name }}
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 bg-dark-grey py-2">
            {{ note.body }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'BugNotes',
  props: {
    // note: {
    //   type: Object,
    //   required: true
    // }
  },
  setup() {
    return {
      notes: computed(() => AppState.notes)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pic{
  width: 20px
}
</style>
