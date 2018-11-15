<template>
  <div class="goodsinfo">
    <!-- <h2>{{id}}</h2> -->
    <h2 class="title">{{ goodsdesc.title }}</h2>
    <div class="goods-detail" ref="col" v-html="goodsdesc.content"></div>
  </div>
</template>

<script>
import { getgoodsdesc } from '@/axios/api.js'
export default {
  name: '',
  data () {
    return {
      id: this.$route.params.id,
      goodsdesc: []
    }
  },
  created () {
    this.getgoodsdesc({id: this.id})
  },
  methods: {
    getgoodsdesc (id) {
      getgoodsdesc(id).then(res => {
        this.goodsdesc = res[0]
      })
    }
  }
}
</script>

<style scoped lang="less">
.goodsinfo {
  padding: 4px;
  .title {
    padding: 8px 2px;
    font-size: 22px;
    text-align: center;
    box-sizing: border-box;
  }
  .goods-detail {
    width: 100%;
    p {
      color: red !important;
    }
  }
}
</style>
