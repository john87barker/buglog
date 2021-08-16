<template>
  <div class="modal fade" id="createNote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog ">
      <div class="modal-content bg-dark-grey">
        <div class="modal-header bg-primary ">
          <h5 class="modal-title bg-primary" id="exampleModalLabel">
            Create a Note
          </h5>
          <button type="button" class="btn-close btn btn-outline-secondary" data-dismiss="modal" aria-label="Close" title="close">
            X
          </button>
        </div>
        <div class="modal-body modal-body-scrollable">
          <textarea
            class="form-control"
            id="noteDescription"
            v-model="state.newNote.body"
            rows="3"
            placeholder="Add a note..."
          >
          </textarea>
        </div>
        <!-- vfor in next line -->

        <div class="modal-footer">
          <!-- TODO add @click here -->
          <button type="submit"
                  @click="createNote"
                  class="btn btn-secondary"
                  data-toggle="modal"
                  data-target="#createNote"
          >
            Save Note
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { useRoute, useRouter } from 'vue-router'
import { notesService } from '../services/NotesService'
export default {
  name: 'Component',
  props: {
    bug: {
      type: Object,
      required: true
    },
    note: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    const state = reactive({
      newNote: {}
    })
    return {
      state,
      account: computed(() => AppState.account),
      notes: computed(() => AppState.notes),

      async createNote() {
        try {
          state.newNote.bugId = route.params.id
          await notesService.createNote(state.newNote)
          state.newNote = {}
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
