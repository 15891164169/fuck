<template>
  <div class="photolist">
    <div id="wrapper">
      <ul>
        <li v-for="(item, index) in lists" class="warp" :key="index">
          <p>{{ item.title }}</p>
        </li>
        <!-- <li class="warp">
          <p>推荐</p>
        </li> -->
      </ul>
    </div>
    <!-- <p @click="refs">asdasdas</p> -->
  </div>
</template>

<script>
// import mui from '@/lib/mui/js/mui.min.js'
// import IScroll from 'iscroll'
import { getimgcategory } from '@/axios/api.js'

export default {
  name: 'Photolist',
  data () {
    return {
      lists: []
    }
  },
  created () {
    getimgcategory().then(res => {
      let resData = res
      resData.unshift({title: '全部', id: 0})
      this.lists = resData
    })
  }
}
</script>

<style scoped lang="less">
* {
  touch-action: pan-x;
}
#wrapper {
  -height: 100px;
}
.photolist {
  ul {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    li {
      display: inline-block;
        padding: 4px 10px;
      p {
        display: block;
        margin-bottom: 0;
        width: 80px;
        box-sizing: border-box;
        text-align: center;
      }
    }
  }
}

ul::-webkit-scrollbar {
    display: none;
}
</style>
