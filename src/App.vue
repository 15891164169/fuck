<template>
  <div id="app">
    <mt-header title="headText"></mt-header>

    <!-- app展示内容区域 -->

    <!-- <transition name="fade-tranx"> -->
      <router-view  class="content"></router-view>
    <!-- </transition> -->
    <!-- <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item mui-active" href="#tabbar">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon mui-icon-email"></span>
        <span class="mui-tab-label">消息</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">通讯录</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon mui-icon-gear"></span>
        <span class="mui-tab-label">设置</span>
      </a>
    </nav> -->

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
          <span class="tabber-badge">0</span>
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
import { mapState } from 'vuex'
export default {
  name: 'App',
  watch: {
    '$route' () {
      // console.log(this.$route)
    }
  },
  computed: {
    ...mapState({
      headText: state => state.lunbo.headText
    })
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
  .mint-header {}
  .content {
    height: 100%;
    flex: 1;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .tabber {
    display: flex;
    justify-content: space-around;
    height: 50px;
    line-height: 50px;
    background-color: #efeff4;
    font-size: 12px;
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
