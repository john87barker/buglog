<template>
  <div class="col-md-3 text-left text-light " v-if="bug.creator">
    <router-link :to="{ name: 'BugDetails', params: {id: bug.id}}" @click="getBugById" class="text-light">
      {{ bug.title }}
    </router-link>
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
  color: red;
  text-shadow: 1px 1px  black;
}
.green{
  color: green;
  text-shadow: 1px 1px  black;
}
</style>
