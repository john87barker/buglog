
<template>
  <div class="modal fade" id="createBugReport" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog ">
      <form @submit.prevent="createBug">
        <div class="modal-content bg-dark-grey">
          <div class="modal-header bg-primary ">
            <h5 class="modal-title bg-primary" id="exampleModalLabel">
              Report a Bug
            </h5>
            <button type="button" class="btn-close btn btn-outline-secondary" data-dismiss="modal" aria-label="Close" title="close">
              X
            </button>
          </div>
          <div class="modal-body modal-body-scrollable">
            <input
              class="form-control my-2"
              type="text"
              v-model="state.newBug.title"
              required
              id="bugTitle"
              placeholder="Problem title..."
            >
            <textarea
              class="form-control my-2"
              v-model="state.newBug.description"
              required
              id="bugDescription"
              rows="6"
              placeholder="Describe the problem..."
            >
          </textarea>
          </div>

          <div class="modal-footer">
            <button type="submit"
                    class="btn btn-secondary"
                    title="submit form"
            >
              Save Report
            </button>
          </div>
        </div>
      </form>
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
import $ from 'jquery'

export default {
  name: 'CreateBugModal',
  props: {
    bugs: {
      type: Array,
      required: true
    }
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      newBug: {}
    })
    return {
      state,
      account: computed(() => AppState.account),
      async createBug() {
        try {
          // debugger
          const newBug = await bugsService.createBug(state.newBug)
          state.newBug = {}
          Pop.toast('Bug has been reported', 'success')
          // debugger
          console.log(newBug.id)
          $('#createBugReport').modal('toggle')
          router.push({ name: 'BugDetails', params: { id: newBug.id } })
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
