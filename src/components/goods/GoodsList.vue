<template>
  <div class="goodslist">
    <!-- https://i2.hdslb.com/bfs/face/64fd706dea1b940f3dfc21d3fe008ab4412e9b56.jpg@72w_72h.webp -->
    <div class="list-items">
      <div v-for="(item, idx) in goodslists" class="list-item" :key="idx" @click="goDetail(item.id)">
        <div class="img-title">
          <img src="data:image/jpeg;base64,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" alt="">
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
      </div>
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
        // console.log(res)
        this.goodslists = this.goodslists.concat(res)
      })
    },
    lordMore () {
      this.pgIdx++
      let idx = this.pgIdx
      this.getgoods({pageindex: idx})
    },
    goDetail (id) {
      // this.$router.push('/home/goodsinfo/' + id)
      this.$router.push({ name: 'GoodsInfo', params: { id: id } })
    }
  }
}
</script>

<style lang="less" scoped>
.goodslist {
  .list-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .list-item {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 6px;
      width: 172px;
      min-height: 220px;
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
