
<template>
  <div class="modal fade" id="editBugReport" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog ">
      <div class="modal-content bg-dark-grey">
        <div class="modal-header bg-primary ">
          <h5 class="modal-title bg-primary" id="exampleModalLabel">
            Edit your bug
          </h5>
          <button type="button" class="btn-close btn btn-outline-secondary" data-dismiss="modal" aria-label="Close" title="close">
            X
          </button>
        </div>
        <div class="modal-body modal-body-scrollable">
          <input
            class="form-control my-2"
            type="text"

            v-model="state.activeBug.title"
            id="bugTitle"
            placeholder="Edit the title..."
          >
          <textarea
            class="form-control my-2"

            v-model="state.activeBug.description"
            id="bugDescription"
            rows="6"
            placeholder="Edit your description..."
          >
          </textarea>
        </div>

        <div class="modal-footer">
          <button type="submit"
                  @click="editBug"
                  class="btn btn-secondary"
                  data-toggle="modal"
                  data-target="#editBugReport"
          >
            Update Report
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { bugsService } from '../services/BugsService'
import Pop from '../utils/Notifier'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'

export default {
  name: 'CreateBugModal',
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const state = reactive({
      activeBug: {

      }
    })
    return {
      state,
      account: computed(() => AppState.account),
      async editBug() {
        try {
          // debugger
          const editedBug = await bugsService.editBug(props.bug.id, state.activeBug)
          console.log(editedBug)
          state.activeBug = {}
          Pop.toast('Bug has been reported', 'success')
          // debugger
          router.push({ name: 'BugDetails', params: { id: editedBug.id } })
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

  <style lang="scss" scoped>
  </style>
