<template>
  <div class="cart">
    <!-- 列表区 -->

    <div v-for="(item, index) in carlist" class="mui-card lunbotu" :key="index">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch v-model="selectswitch[item.id]" @change="selectswitchchange([item.id, selectswitch[item.id]])"></mt-switch>
          <div class="goods-info">
            <img src="@/assets/tupian.png" alt="">
            <div class="goods-item">
              <h2 class="title">{{ item.title }}</h2>
              <p>
                <span class="price">￥{{ item.sell_price }}</span>
                <cartNumbox :count="goodsCount[item.id]" :item="item"></cartNumbox>
                <span class="del" @click="[delatecartitem(item.id), delateList(index)]">删除</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p v-if="carlist.length === 0" class="tips">您的购物车空空如也....</p>
    <p v-if="carlist.length === 0" class="goshop" @click="goshop">去商店逛逛</p>
    <!-- 结算区 -->
    <div class="mui-card lunbotu">
      <div class="mui-card-content">
        <div class="mui-card-content-inner account">
          <div class="computed">
            <!-- <p>总计(不含运费)</p> -->
            总计(不含运费)
            <p>
              以勾选商品<i> {{ countAndAmount.count }} </i>件，总价<i> ￥{{ countAndAmount.amount }} </i>元
            </p>
          </div>
          <mt-button type="danger" class="goaccount">去结算</mt-button>
        </div>
      </div>
    </div>
    <!-- {{selectswitch}}
    {{countAndAmount}} -->
  </div>
</template>

<script>
import cartNumbox from '@/components/common/shopcart-numbox.vue'
import { getshopcarlist } from '@/axios/api.js'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      carlist: [],
      selectval: true
    }
  },
  created () {
    this.getshopcarlist()
  },
  computed: {
    ...mapState({
      cars: state => state.shopcart.cars
    }),
    ...mapGetters(['goodsCount', 'selectswitch', 'countAndAmount']),
    idStr () {
      let idArr = []
      this.cars.forEach(item => {
        idArr.push(item.id)
      })
      return idArr.join(',')
    }
  },
  methods: {
    ...mapActions(['delatecartitem', 'selectswitchchange']),
    getshopcarlist () {
      if (this.idStr.length === 0) return
      getshopcarlist({ids: this.idStr}).then(res => {
        this.carlist = res
      })
    },
    goshop () {
      this.$router.push({name: 'GoodsList'})
    },
    delateList (idx) {
      this.carlist.splice(idx, 1)
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
  .tips {
    margin-bottom: 0;
    line-height: 48px;
    text-align: center;
    color: #26a2ff;
  }
  .goshop {
    text-align: center;
  }
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
    &.account {
      justify-content: space-between;
      i {
        color: red;
      }
    }
  }
}
</style>
