<template>
  <div class="BugDescription col-md-10 offset-1 bg-dark-grey px-5 list pt-3 shadow">
    <div class="row my-3">
      <div class="col-md-4">
        Picture and Name
      </div>
      <div class="col-md-4">
        Date
      </div>
      <div class="col-md-4">
        Status
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <!-- {{ b.description }} -->
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto, dicta exercitationem. Asperiores adipisci iure, laborum odit omnis ut accusamus animi reiciendis. Explicabo fugit a perferendis atque, sit harum dolorem nostrum!
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BugDescription',
  props: {
    bug: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
