<template>
  <div id="app">
    <mt-header :title="headText">
      <span v-show="showBack" slot="left" @click="goBack">
        <mt-button icon="back">返回</mt-button>
      </span>
    </mt-header>

    <!-- app展示内容区域 -->

    <!-- <transition name="fade-tranx"> -->
      <router-view  class="content"></router-view>
    <!-- </transition> -->

    <!-- app底部区域 -->

    <nav class="tabber">
      <router-link to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="tabber-link">首页</span>
      </router-link>
      <router-link to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="tabber-link">会员</span>
      </router-link>
      <router-link to="/cart">
        <span class="mui-icon-extra mui-icon-extra-cart">
          <span class="tabber-badge">{{ allCount }}</span>
        </span>
        <span class="tabber-link">购物车</span>
      </router-link>
      <router-link to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="tabber-link">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'App',
  data () {
    return {
      showBack: false
    }
  },
  created () {
    this.showBack = !(this.$route.path === '/home')
  },
  watch: {
    '$route' (newVal) {
      this.showBack = !(newVal.path === '/home')
    }
  },
  computed: {
    ...mapState({
      headText: state => state.lunbo.headText
    }),
    ...mapGetters(['allCount'])
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="less">
.fade-tranx-enter {
  position: absolute;
  /*left: 100%;*/
  transform: translateX(100%);
}
.fade-tranx-leave-to {
  position: absolute;
  transform: translateX(-100%);
}
.fade-tranx-enter-active, .fade-tranx-leave-active {
  transition: all 1s ease;
}

#app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  .mint-header {
    z-index: 999;
  }
  .content {
    height: 100%;
    flex: 1;
    overflow-x: hidden;
    -overflow-y: auto;
  }
  .tabber {
    display: flex;
    justify-content: space-around;
    height: 50px;
    line-height: 50px;
    background-color: rgb(218, 218, 218);
    font-size: 12px;
    z-index: 999;
    a {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-align: center;
      color: #000;
      &.myactive {
        color: #26a2ff;
      }
      .mui-icon {
        height: 16px;
      }
      .tabber-link {
        height: 26px;
        line-height: 26px;
      }
    }
    .tabber-badge {
      position: absolute;
      width: 16px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      background-color: red;
      color: #fff;
      border-radius: 50%;
      font-size: 14px;
    }
  }
}
</style>
