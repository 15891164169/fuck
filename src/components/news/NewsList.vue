<template>
  <div class="newslist">
    <ul class="mui-table-view">

      <li v-for="(list, index) in newslists" :key="index" class="mui-table-view-cell mui-media">
        <router-link :to="'/home/newsinfo/'+ list.id">
          <img class="mui-media-object mui-pull-left" src="@/assets/logo.png">
          <div class="mui-media-body">
            <p class="text">{{ list.title }}</p>
            <p class="mui-ellipsis">
              <span>发表时间：{{ list.add_time }}</span>
              <span>点击：{{ list.click }} 次</span>
            </p>
          </div>
        </router-link>
      </li>

      <!-- <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="https://avatars2.githubusercontent.com/u/22955050?s=40&v=4">
          <div class="mui-media-body">
            <p class="text">幸福</p>
            <p class="mui-ellipsis">
              <span>发表时间：2012-2-2</span>
              <span>点击：2 次</span>
            </p>
          </div>
        </a>
      </li> -->
    </ul>
  </div>
</template>

<script>
import { getnewslists } from '@/axios/api.js'
export default {
  name: 'Newslist',
  data () {
    return {
      newslists: []
    }
  },
  created () {
    getnewslists().then(res => {
      this.newslists = res
    })
  }
}
</script>

<style scoped lang="less">
.mui-table-view {
  .text {
    font-size: 14px;
  }
  .mui-ellipsis {
    display: flex;
    justify-content: space-between;
    color: #26a2ff;
    font-size: 12px;
    span {
    }
  }
}
</style>
