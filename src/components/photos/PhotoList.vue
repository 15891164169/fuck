<template>
  <div class="photolist">
    <div id="wrapper">
      <ul>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
        <li class="warp">
          <p>推荐</p>
        </li>
      </ul>
    </div>
    <!-- <p @click="refs">asdasdas</p> -->
  </div>
</template>

<script>
// import mui from '@/lib/mui/js/mui.min.js'
import IScroll from 'iscroll'

export default {
  name: 'Photolist',
  data () {
    return {

    }
  }
}
</script>

<style scoped lang="less">
#wrapper {
  height: 100px;
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
</style>
