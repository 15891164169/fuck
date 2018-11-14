<template>
  <div class="photolist">

    <!-- 顶部nav区域 -->

    <div id="wrapper">
      <ul class="nav-list">
        <li v-for="(item, index) in navLists" class="item" :key="index">
          <p :class="activeIndex === item.id ? 'active' : ''" @click="getData(item.id)">{{ item.title }}</p>
        </li>
        <!-- <li class="warp">
          <p>推荐</p>
        </li> -->
      </ul>
    </div>
    <!-- <p @click="refs">asdasdas</p> -->

    <!-- 图片列表区域 -->

    <div class="img-wrapper">
      <ul class="img-lists">
        <li class="img-list" v-for="(item, index) in imgCateLists" :key="index">
          <!-- <img :src="img1" alt=""> -->
          <!-- <img v-lazy="img1"> -->
          <img v-lazy="my_img_url">
          <p>暗示撒撒</p>
        </li>
      </ul>
      <p v-show="!imgCateLists.length">什么都没</p>
    </div>
  </div>
</template>

<script>
// import mui from '@/lib/mui/js/mui.min.js'
// import IScroll from 'iscroll'
import img from '../../assets/test.png'
import { getimgcategory, getimages } from '@/axios/api.js'

export default {
  name: 'Photolist',
  data () {
    return {
      navLists: [],
      imgCateLists: [],
      activeIndex: -1000,
      my_img_url: img
    }
  },
  created () {
    getimgcategory().then(res => {
      let resData = res
      resData.unshift({title: '全部', id: 0})
      this.activeIndex = 0
      this.navLists = resData
    })
    this.getimages(this.activeIndex)
  },
  methods: {
    getData (idx) {
      this.activeIndex = idx
      this.getimages(idx)
    },
    getimages (cateid) {
      getimages({cateid: cateid}).then(res => {
        let newRes = res.map((item, index) => {
          if (item.img_url) {
            item.img_url = '../../assets/logo.png'
          }
          return item
        })
        console.log(newRes)
        this.imgCateLists = newRes
      })
    }
  }
}
</script>

<style scoped lang="less">
* {
  touch-action: pan-x;
}
#wrapper {
  -position: absolute;
  -height: 100px;
  background-color: #fff;
}
.photolist {
  -position: relative;
  .nav-list {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    li {
      display: inline-block;
      padding: 4px 10px;
      p {
        display: block;
        margin-bottom: 0;
        padding: 2px 4px;
        white-space: nowrap;
        box-sizing: border-box;
        text-align: center;
        &.active {
          color: #26a2ff;
          border-bottom: 1px solid #000;
          -transition: all .5s ease;
        }
      }
    }
  }
  .img-wrapper {
    margin-top: 34px;
    .img-lists {
      .img-list {
        img {
          width: 100%;
        }
        p {}
      }
    }
  }
}

img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
ul::-webkit-scrollbar {
    display: none;
}
</style>
