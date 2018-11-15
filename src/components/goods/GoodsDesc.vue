<template>
  <div class="goodsdesc">
    <!-- <h2>{{id}}</h2> -->
    <h2 class="title">{{ goodsdesc.title }}</h2>
    <div class="goods-desc" ref="col" v-html="goodsdesc.content"></div>
  </div>
</template>

<script>
import { getgoodsdesc } from '@/axios/api.js'
export default {
  name: 'Goodsdesc',
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

<style lang="less">
.goodsdesc {
  padding: 4px;
  .title {
    padding: 8px 2px;
    margin-top: 0;
    font-size: 16px;
    text-align: center;
    box-sizing: border-box;
    color: #26a2ff;
    border-bottom: 1px solid #222;
  }
  .goods-detail {
    width: 100%;
    p {
      color: red !important;
    }
  }
  .goods-desc {
    img {
      width: 100%;
    }
  }
}
</style>
