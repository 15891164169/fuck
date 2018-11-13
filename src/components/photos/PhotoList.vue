<template>
  <div class="photolist">
    <div id="wrapper">
      <ul>
        <li class="warp" @click="refs">
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
      rr: null
    }
  },
  created () {
  },
  mounted () {
    this.rr = new IScroll('#wrapper', {
      mouseWheel: true
    })
  },
  methods: {
    refs () {
      alert(1)
      this.rr.refresh()
    }
  }
}
</script>

<style scoped lang="less">
#wrapper {
  height: 100%;
}
.photolist {
  ul {
    -display: flex;
    li {
      width: 100%;
    }
  }
}
</style>
