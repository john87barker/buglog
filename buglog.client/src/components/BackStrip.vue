<template>
  <div class="component col-md-12  bg-primary top ">
    <div class="row pt-1 text-light">
      <div class="col-md-3 text-right pr-5">
        <button type="button" data-target="#createNote" data-toggle="modal" class="mx-2 my-1 btn btn-outline-secondary" title="create note">
          Notes
        </button>
      </div>

      <NoteModal />
    </div>
    <div class="row">
      <BugDescription />
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
.top{
  height: 10rem;
}
</style>
