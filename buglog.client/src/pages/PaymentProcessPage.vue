<template>
  <div class="component flex-grow-1 d-flex flex-column align-items-center justify-content-between row">
    <div class="col-md-12">
      <div class="row pt-3 ">
        <div class="col-md-4 offset-1 d-flex bg-dark-grey justify-content-between ">
          <h3 class="pt-1" v-for="b in bugs" :key="b.id">
            {{ b.title }}
          </h3>
          <img src="../assets/img/pencil-box.png" alt="pencil image" srcset="" title="image">
        </div>
      </div>
      <BackStrip />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentProcess',
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
