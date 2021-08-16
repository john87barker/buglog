<template>
  <div class="component col-md-10 offset-1 bg-primary top ">
    <div class="row pt-1 text-light">
      <div class="col-md-3 text-right pr-5">
        <button type="button" data-target="#createNote" data-toggle="modal" class="mx-2 my-1 btn btn-outline-secondary">
          Notes
        </button>
        <NoteModal />
      </div>
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
