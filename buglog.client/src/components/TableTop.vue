<template>
  <div class="component col-md-12 col-sm-12 bg-primary top center">
    <div class="row pt-1 text-light left">
      <h4 class="col-md-3 text-left pl-5">
        Title
      </h4>
      <h4 class="col-md-3 ">
        Reported By
      </h4>
      <h4 class="col-md-3 pl-5">
        Last Update
      </h4>
      <h4 class="col-md-3 text-center">
        Status
      </h4>
    </div>
    <div class="row">
      <!-- spill for the bugList -->
      <BugList />
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
