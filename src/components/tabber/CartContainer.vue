<template>
  <div class="cart">
    <!-- 列表区 -->

    <div v-for="(item, index) in carlist" class="mui-card lunbotu" :key="index">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch></mt-switch>
          <div class="goods-info">
            <img src="@/assets/tupian.png" alt="">
            <div class="goods-item">
              <h2 class="title">{{ item.title }}</h2>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <cartNumbox :count="goodsCount[item.id]" :item="item"></cartNumbox>
                <i class="del" @click="delatecartitem(item.id)">删除</i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p v-if="carlist.length === 0">您的购物车空空如也</p>
    <!-- 结算区 -->
    <div class="mui-card lunbotu">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          asdsada
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cartNumbox from '@/components/common/shopcart-numbox.vue'
import { getshopcarlist } from '@/axios/api.js'
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      carlist: []
    }
  },
  created () {
    this.getshopcarlist()
  },
  computed: {
    ...mapState({
      cars: state => state.shopcart.cars
    }),
    ...mapGetters(['goodsCount']),
    ...mapActions(['delatecartitem']),
    idStr () {
      let idArr = []
      this.cars.forEach(item => {
        idArr.push(item.id)
      })
      return idArr.join(',')
    }
  },
  methods: {
    getshopcarlist () {
      if (this.idStr.length === 0) return
      getshopcarlist({ids: this.idStr}).then(res => {
        this.carlist = res
        console.log(res)
      })
    }
  },
  components: {
    cartNumbox
  }
}
</script>

<style scoped lang="less">
.cart {
  -background-color: red;
  .mui-card-content-inner {
    display: flex;
    -flex-direction: column;
    padding: 12px;
    .goods-info {
      display: flex;
      flex: 1;
      margin-left: 6px;
      img {
        width: 60px;
        height: 60px;
      }
      .goods-item {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin-left: 6px;
        .title {
          font-size: 13px;
          font-weight: 700;
        }
        p {
          margin-bottom: 0;
          .price {
            color: red;
          }
          .mui-numbox {
            height: 26px;
          }
          .del {
            color: #26a2ff;
          }
        }
      }
    }
  }
}
</style>
