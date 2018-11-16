<template>
  <div class="goodsinfo">
    <div class="mui-card lunbotu">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunboData="lunboData"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价:<del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;&nbsp;
            销售价:<span class="now-price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <p>
            购买数量&nbsp;:&nbsp;&nbsp;<goodsinfonumbox @sendNum="getNum" :maxNum="goodsinfo.stock_quantity"></goodsinfonumbox>
            </p>
          <p class="btn-box">
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addtoshopcart([goodsinfo, num])">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号:{{ goodsinfo.goods_no }}</p>
          <p>库存情况:{{ goodsinfo.stock_quantity }}</p>
          <p>上架时间:{{ goodsinfo.add_time }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>

    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter">
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
  </div>
</template>

<script>
import swiper from '@/components/common/swiper.vue'
import goodsinfonumbox from '@/components/common/goodsinfo-numbox.vue'

import { mapActions } from 'vuex'

import { getthumimages, getgoodsinfo } from '@/axios/api.js'
export default {
  name: 'Goodsinfo',
  data () {
    return {
      id: this.$route.params.id,
      lunboData: [],
      goodsinfo: [],
      ballFlag: false,
      num: 1,
      good: {}
    }
  },
  created () {
    this.getthumimages({imgid: this.id})
    this.getgoodsinfo({id: this.id})
  },
  methods: {
    test () {
      console.log(this.num)
    },
    ...mapActions(['addtoshopcart']),
    getthumimages (idx) {
      getthumimages(idx).then(res => {
        res.forEach(item => {
          item.img = item.src
        })
        this.lunboData = res
      })
    },
    getgoodsinfo (idx) {
      getgoodsinfo(idx).then(res => {
        this.goodsinfo = res[0]
        console.log(this.goodsinfo)
      })
    },
    goDesc (id) {
      this.$router.push({ name: 'GoodsDesc', params: id })
    },
    goComment (id) {
      this.$router.push({ name: 'GoodsComment', params: id })
    },
    beforeEnter (el) {
      el.style.transform = 'translate(0,0)'
      // console.log(el.getBoundingClientRect())
    },
    enter (el, done) {
      el.offsetWidth// eslint-disable-line

      // console.log(this.$refs.ball.getBoundingClientRect().top)
      el.style.transform = 'translate(97px,246px)'
      el.style.transition = 'all 1s cubic-bezier(.58,.24,.84,.27)'
      done()
    },
    afterEnter (el) {
      this.ballFlag = !this.ballFlag
    },
    getNum (data) {
      this.num = data
    }
  },
  components: {
    swiper,
    goodsinfonumbox
  }
}
</script>

<style scoped  lang="less">
.goodsinfo {
  -background-color: #eee;
  .now-price {
    color: red;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 10px 0;
    }
  }
  .ball {
    position: absolute;
    top: 370px;
    left: 150px;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    z-index: 99;
  }
}
</style>
