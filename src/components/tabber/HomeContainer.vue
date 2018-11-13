<template>
  <div class="home">

    <!-- 轮播图区域 -->

    <mt-swipe v-if="lunbotuList">
      <mt-swipe-item v-for="(list, index) in lunbotuList" :key="index">
        <img :src="list.img" alt="img">
      </mt-swipe-item>
    </mt-swipe>

    <!-- 九宫格区域 -->

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="home/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="home/photolist">
          <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
  </ul>
  </div>
</template>

<script>
// import { Toast } from 'mint-ui'
import { getLunBo } from '@/axios/api.js'
export default {
  name: 'Home',
  data () {
    return {
      lunbotuList: []
    }
  },
  created () {
    let getLunBoRES = getLunBo()
    getLunBoRES.then(res => {
      this.lunbotuList = res
    })
  },
  methods: {
  }
}
</script>

<style scoped lang="less">
.home {
  .mint-swipe {
    height: 180px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    li {
      border: none;
    }
  }
}
</style>
