<template>
  <div class="component flex-grow-1 d-flex flex-column align-items-center justify-content-between row">
    <div class="col-md-12">
      <div class="row pt-3 ">
        <div class="col-md-4 offset-1 d-flex bg-dark-grey justify-content-between ">
          <h3 class="pt-2">
            {{ activeBug.title }}
          </h3>
          <button class="btn btn-outline-dark-grey" data-target="#editBugReport" data-toggle="modal">
            <img src="../assets/img/pencil-box.png" alt="pencil image" srcset="" title="edit bug">
          </button>
          <EditBug :bug="activeBug" />
        </div>
      </div>
      <BugDescription />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRoute, useRouter } from 'vue-router'
import Pop from '../utils/Notifier'
// import Swal from 'sweetalert2/dist/sweetalert2.all'
import { bugsService } from '../services/BugsService'
import { notesService } from '../services/NotesService'
export default {
  name: 'BugDetails',
  props: {
    bug: {
      type: Object,
      required: true
    },
    notes: {
      type: Array,
      required: true
    }
  },
  setup() {
    const route = useRoute()
    const state = reactive({
      activeBug: {}
    })
    onMounted(async() => {
      try {
        // debugger
        await bugsService.getBugById(route.params.id)
        await notesService.getNotesByBugId(route.params.id)
      } catch (error) {
        Pop.toast('Could not retrieve the bug', 'error')
        console.log(error)
      }
    })
    return {
      state,
      bugs: computed(() => AppState.bugs),
      activeBug: computed(() => AppState.activeBug)
      // Create edit bug details.
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
.btn-gradient{
  background: #f12711;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
