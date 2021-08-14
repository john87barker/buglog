<template>
  <div class="component col-md-10 offset-1 bg-dark-grey px-5 list pt-3 ">
    <!-- Hard Coded lists row 1 -->
    <div class="row py-3 bg-primary shadow mb-2">
      <div class="col-md-3 text-left">
        Payment Process
      </div>
      <div class="col-md-3">
        someone@codeworks.com
      </div>
      <div class="col-md-3 text-right pr-3">
        June 12, 2020
      </div>
      <div class="col-md-3 text-right pr-5">
        Status: Open
      </div>
    </div>
    <!-- Hard Coded lists row 2 -->
    <div class="row py-3 bg-primary shadow">
      <div class="col-md-3 text-left">
        Payment Process
      </div>
      <div class="col-md-3">
        someone@codeworks.com
      </div>
      <div class="col-md-3 text-right pr-3">
        July 3, 2000
      </div>
      <div class="col-md-3 text-right pr-5">
        Status: closed
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
.list{
  min-height: 58vh;
}
</style>
