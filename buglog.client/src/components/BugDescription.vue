<template>
  <div class="component col-md-10 offset-1 bg-primary top ">
    <div class="row pt-1 text-light">
      <div class="col-md-3 text-right pr-5">
        <button type="button" data-target="#createNote" data-toggle="modal" class="mx-2 my-1 btn btn-outline-secondary">
          Add a Note
        </button>
        <NoteModal />
      </div>
    </div>
    <div class="row">
      <div class="BugDescription col-md-10 offset-1 bg-dark-grey px-5 list py-3 mb-5 shadow">
        <div class="row my-3">
          <div class="col-md-4 d-flex">
            <div>
              <img :src="account.picture" alt="" class="rounded pic">
            </div>
            <div class="pl-2 pt-3">
              {{ account.name }}
            </div>
          </div>
          <div class="col-md-4 pt-3 text-grey">
            <div>
              Last Updated:
            </div>
            <div>
              {{ new Date (activeBug.updatedAt).toLocaleDateString() }}
            </div>
          </div>
          <div class="col-md-4 pt-3">
            Bug fixed?
            {{ activeBug.closed }}
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 pb-4">
            <div>
              Report Details:
            </div>
            <div>
              {{ activeBug.description }}
            </div>
          </div>
        </div>
        <NotesComponent />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import NotesComponent from '../components/NotesComponenet.vue'
export default {
  name: 'BugDescription',
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
  setup() {
    // const state = reactive()
    return {
      // state,
      account: computed(() => AppState.account),
      bugs: computed(() => AppState.bugs),
      activeBug: computed(() => AppState.activeBug)
    }
  },
  components: { NotesComponent }
}
</script>

<style lang="scss" scoped>
.pic{
  width: 100%;
}
.top{
  height: 10rem;
}
</style>
