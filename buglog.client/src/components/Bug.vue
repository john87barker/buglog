<template>
  <div class="d-flex justify-content-around" title="go to bug">
    <div class="col-md-3 text-left text-light " v-if="bug.creator">
      {{ bug.title }}
    </div>
    <div class="col-md-3" v-if="bug.creator">
      {{ bug.creator.name }}
    </div>
    <div class="col-md-3 text-right pr-3">
      {{ new Date(bug.createdAt).toLocaleDateString() }}
    </div>
    <div class="col-md-3 text-right pr-5">
      <div v-if="bug.closed ==true" class="red">
        Closed
      </div>
      <div v-else class="green">
        Open
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Component',
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
.red{
  color: red($color: #000000);
  text-shadow: 1px 1px  red;
}
.green{
  color: green($color: #000000);
  text-shadow: 1px 1px  green;
}
</style>
