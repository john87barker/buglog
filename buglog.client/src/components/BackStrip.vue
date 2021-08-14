<template>
  <div class="component col-md-10 offset-1 bg-primary top ">
    <div class="row pt-1 text-light">
      <div class="col-md-3 text-right pr-5">
        Title
      </div>
    </div>
    <div class="row">
      <!-- spill for the bugList -->
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
