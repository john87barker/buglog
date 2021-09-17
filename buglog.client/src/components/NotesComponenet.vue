<template>
  <div class="row">
    <div class="BugNotes col-md-12  bg-primary px-5 list py-3 shadow mt-3 rounded" v-for="note in notes" :key="note.id">
      <div class="m-2">
        <div class="row d-flex justify-content-between mb-3">
          <div class="col-md-4 border border-secondary d-flex pb-2 rounded">
            <div>
              <img :src="note.creator.picture" alt="" class="pic mr-3">
            </div>
            <div>
              {{ note.creator.name }}
            </div>
          </div>
          <div v-if="activeBug.closed && note.creatorId == account.id">
            <button class=" btn btn-outline-warning" @click="destroyNote(note.id)" title="close note">
              Delete Note
            </button>
          </div>
          <div v-else>
            <button class=" btn btn-outline-warning" @click="destroyNote(note.id)" title="close note">
              Delete Note
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 bg-dark-grey py-2 rounded">
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
import Swal from 'sweetalert2/dist/sweetalert2.all'
import { notesService } from '../services/NotesService'
import Pop from '../utils/Notifier'
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
      notes: computed(() => AppState.notes),
      account: computed(() => AppState.account),
      activeBug: computed(() => AppState.activeBug),
      async destroyNote(id) {
        try {
          await Swal.fire({

            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              await notesService.destroyNote(id)
              Swal.fire(
                'Congratulations',
                'Your note is gone.',
                'success'
              )
            }
          })
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
.pic{
  width: 20px
}
</style>
