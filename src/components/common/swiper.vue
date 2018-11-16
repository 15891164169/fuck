<template>
  <div class="swiper">
    <mt-swipe>
      <mt-swipe-item v-for="(list, index) in lunboData" :key="index">
        <img :src="list.img" alt="img" :class="{isfull: isfull}">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  name: 'Swiper',
  props: ['lunboData', 'isfull'],
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
.swiper {
  .mint-swipe {
    height: 180px;
    text-align: center;
    img {
      // width: 100%;
      height: 100%;
    }
  }
  .isfull {
    width: 100%;
  }
}
</style>
