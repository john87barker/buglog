<template>
  <div class="modal fade" id="createNote" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog ">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Notes
          </h5>
          <button type="button" class="btn-close btn btn-outline-danger" data-dismiss="modal" aria-label="Close" title="close">
            X
          </button>
        </div>

        <div class="modal-body modal-body-scrollable">
          <textarea
            class="form-control"
            v-model="state.newNote.body"
            id="note"
            rows="3"
            placeholder="Note..."
          >
          </textarea>
        </div>
        <div v-for="n in notes" :key="n.id">
          <div class="m-4 p-3 border col-md-11">
            <div class="row">
              <div class="col-md-10">
                <Creator :project="p" />
                <!-- {{ project.creator.name }} -->
                <br>
                {{ n.body }}
                <br>
                <br>
                {{ new Date(n.createdAt).toLocaleString() }}
              </div>
              <div class="col-md-2 text-right">
                <button class="btn btn-outline-primary" title="delete" @click="destroyNote(n.id)">
                  X
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="submit" @click="createNote" class="btn btn-primary" data-toggle="modal" data-target="#createNote">
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
