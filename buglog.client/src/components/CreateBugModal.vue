
<template>
  <div class="modal fade" id="createBugReport" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog ">
      <div class="modal-content bg-dark-grey">
        <div class="modal-header bg-primary ">
          <h5 class="modal-title bg-primary" id="exampleModalLabel">
            Report a Bug
          </h5>
          <button type="button" class="btn-close btn btn-outline-secondary" data-dismiss="modal" aria-label="Close" title="close">
            X
          </button>
        </div>
        <!-- add v-model in here -->
        <div class="modal-body modal-body-scrollable">
          <textarea
            class="form-control"

            id="note"
            rows="3"
            placeholder="Note..."
          >
          </textarea>
        </div>
        <!-- vfor in next line -->
        <div>
          <div class="m-4 p-3 border rounded col-md-11 bg-primary">
            <div class="row ">
              <div class="col-md-10 ">
                Note Body goes here
              </div>
              <!-- TODO add delete button back on when ready -->
              <!-- <div class="col-md-2 text-right">
                <button class="btn btn-outline-primary" title="delete" @click="destroyNote(n.id)">
                  X
                </button>
              </div> -->
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <!-- TODO add @click here -->
          <button type="submit"

                  class="btn btn-secondary"
                  data-toggle="modal"
                  data-target="#createNote"
          >
            Save Bug Report
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
