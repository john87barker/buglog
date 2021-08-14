<template>
  <div class="component flex-grow-1 d-flex flex-column align-items-center justify-content-between row">
    <div class="col-md-12">
      <div class="row pt-3">
        <div class="col-md-6  pb-4">
          <h2>Bugs</h2>
        </div>
        <div class="col-md-6 pb-4 ">
          <button type="button" class="btn btn-outline-primary report btn-gradient">
            Report Bug
          </button>
        </div>
        <BackStrip />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaymentProcess',
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
