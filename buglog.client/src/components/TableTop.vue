<template>
  <div class="component col-md-10 offset-1 bg-primary top ">
    <div class="row pt-1 text-light">
      <h4 class="col-md-3 text-right pr-5">
        Title
      </h4>
      <h4 class="col-md-3 text-right pr-4">
        Reported By
      </h4>
      <h4 class="col-md-3 ">
        Last Update
      </h4>
      <h4 class="col-md-3 text-left">
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
