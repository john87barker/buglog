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
        <!-- add v-model in here -->
        <div class="modal-body modal-body-scrollable">
          <input
            class="form-control mb-2"
            type="text"

            id="noteTitle"
            placeholder="Bug name..."
          >
          <textarea
            class="form-control"
            id="noteDescription"
            rows="3"
            placeholder="Describe the bug..."
          >
          </textarea>
        </div>
        <!-- vfor in next line -->

        <div class="modal-footer">
          <!-- TODO add @click here -->
          <button type="submit"

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
export default {
  name: 'Component',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
