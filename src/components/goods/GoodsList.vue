<template>
  <div class="goodslist">
    <!-- https://i2.hdslb.com/bfs/face/64fd706dea1b940f3dfc21d3fe008ab4412e9b56.jpg@72w_72h.webp -->
    <div class="list-items">
      <router-link :to='"/home/goodslist/goodsinfo/" + item.id' tag="div" v-for="(item, idx) in goodslists" class="list-item" :key="idx">
        <div class="img-title">
          <img src="https://i2.hdslb.com/bfs/face/64fd706dea1b940f3dfc21d3fe008ab4412e9b56.jpg@72w_72h.webp" alt="">
          <p class="title">{{ item.title }}</p>
        </div>
        <div class="price-total">
          <div class="price">
            <span class="now-price">￥{{ item.sell_price }}</span>
            <span class="old-price">￥{{ item.market_price }}</span>
          </div>
          <div class="total">
            <span class="sell">热卖中</span>
            <span class="last">剩{{ item.stock_quantity }}件</span>
          </div>
        </div>
      </router-link>
    </div>

    <div class="lordMore" @click="lordMore()">加载更多</div>
  </div>
</template>

<script>
import { getgoods } from '@/axios/api.js'
export default {
  name: 'Goodslist',
  data () {
    return {
      pgIdx: 1,
      goodslists: []
    }
  },
  created () {
    this.getgoods({pageindex: this.pgIdx})
  },
  methods: {
    getgoods (idx) {
      getgoods(idx).then(res => {
        console.log(res)
        this.goodslists = res
      })
    },
    lordMore () {
      // this.pgIdx++
      // let idx = this.pgIdx
      // console.log(idx)
      // this.getgoods({pageindex: idx})
    }
  }
}
</script>

<style lang="less" scoped>
.goodslist {
  padding: 10px;
  .list-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .list-item {
      margin-bottom: 6px;
      width: 172px;
      min-height: 232px;
      color: #000;
      border: 1px solid #ccc;
      box-shadow: 0 0 8px #ccc;
      .img-title {
        position: relative;
        img {
          vertical-align: middle;
          width: 100%;
        }
        .title {
          position: absolute;
          bottom: 0;
          margin: 0;
          color: red;
          font-weight: 700;
        }
      }
      .price-total {
        padding: 6px 4px;
        background-color: #eee;
        .price {
          .now-price {
            color: red;
          }
          .old-price {
            margin-left: 10px;
            font-size: 12px;
            color: blue;
            text-decoration: line-through;
          }
        }
        .total {
          padding: 2px 0;
          color: silver;
          display: flex;
          justify-content: space-between;
          span {
            font-size: 12px;
          }
          .sell {}
          .last {}
        }
      }
    }
  }
  .lordMore {
    padding: 5px 0;
    width: 100%;
    background-color: skyblue;
    border-radius: 8px;
    text-align: center;
  }
}
</style>
