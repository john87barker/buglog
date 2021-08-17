<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-between row ">
    <div class="col-md-12 col-sm-12 ">
      <div class="row pt-3">
        <div class="col-md-6 col-sm-12  pb-4">
          <h2>Bugs</h2>
        </div>
        <div class="col-md-6 col-sm-12 pb-4 ">
          <button type="button" data-target="#createBugReport" data-toggle="modal" class="mx-2 my-1 btn btn-gradient report">
            Report Bug
          </button>
          <CreateBugModal :bug="b" />
        </div>
        <TableTop />
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { bugsService } from '../services/BugsService'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'
import TableTop from '../components/TableTop.vue'
import CreateBugModal from '../components/CreateBugModal.vue'

export default {
  name: 'Home',
  props: {
    bugs: {
      type: Array,
      required: true
    }
  },
  setup() {
    const state = reactive()

    onMounted(async() => {
      try {
        // debugger
        // await bugsService.getAllBugs()
        await bugsService.getAllBugs()
        console.log('mounted get all')
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      state,
      account: computed(() => AppState.account),

      components: {
        TableTop, CreateBugModal
      }

    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
.btn-gradient{
  background: #f12711;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #f5af19, #f12711);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #f5af19, #f12711); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
