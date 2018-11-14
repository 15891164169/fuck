<template>
  <div class="photolist">

    <!-- 顶部nav区域 -->

    <div id="wrapper" class="nav-wrapper">
      <ul class="nav-list">
        <li v-for="(item, index) in navLists" class="item" :key="index">
          <p :class="activeIndex === item.id ? 'active' : ''" @click="getData(item.id)">{{ item.title }}</p>
        </li>
        <!-- <li class="warp">
          <p>推荐</p>
        </li> -->
      </ul>
    </div>

    <!-- 图片列表区域 -->

    <div class="img-wrapper">
      <ul class="img-lists">
        <router-link :to="'/home/photoinfo/' + item.id" class="img-list" v-for="(item, index) in imgCateLists" :key="index" tag="li">
          <!-- <img :src="img1" alt=""> -->
          <img v-lazy.img-wrapper="item.img_url" alt="稍等~请求图片中">
          <!-- <img v-lazy="my_img_url"> -->
          <div class="im-introduce">
            <h2>{{ item.title }}</h2>
            <p>{{ item.zhaiyao }}</p>
          </div>
        </router-link>
      </ul>
      <p v-show="!imgCateLists.length" class="tips">很懒&nbsp;&nbsp;&nbsp;&nbsp;(*￣︶￣)&nbsp;&nbsp;&nbsp;!</p>
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
        // let newRes = res.map((item, index) => {
        //   if (item.img_url) {
        //     item.img_url = '../../assets/logo.png'
        //   }
        //   return item
        // })
        // console.log(newRes)
        // this.imgCateLists = newRes
        this.imgCateLists = res
        console.log(res)
      })
    }
  }
}
</script>

<style scoped lang="less">
// * {
//   touch-action: pan-x;
//   touch-action: pan-y;
// }

.photolist {
  -position: relative;
  .nav-wrapper {
    -position: absolute;
    -height: 100px;
    background-color: #fff;
    .nav-list {
      display: flex;
      padding: 2px;
      border-bottom: 1px solid rgb(228, 236, 238);
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
  }
  .img-wrapper {
    -margin-top: 34px;
    .img-lists {
      padding: 10px;
      box-sizing: border-box;
      .img-list {
        position: relative;
        -padding: 8px;
        margin: 0 0 10px 0;
        box-shadow: 0 0 9px #999;
        box-sizing: border-box;
        -text-align: center;
        // -webkit-box-shadow:0px 0px 2px #333333;
          //  -moz-box-shadow:0px 0px 2px #333333;
                // box-shadow:0px 0px 2px #333333;
         &:last-child {
           padding-bottom: 0;
         }
        img {
          vertical-align: middle;
          width: 100%;
          border: 1px solid rgb(202, 208, 209);
        }
        img[lazy=loading] {
          width: 100%;
          margin: auto;
        }
        .im-introduce {
          position: absolute;
          bottom: 0;
          background-color: rgba(0,0,0,0.4);
          color: #fff;
          text-align: left;
          width: 100%;
          h2 {
            font-size: 14px;
            margin-top: 0;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          p {
            color: #fff;
            font-size: 13px;
            margin-bottom: 0;
            max-height: 80px;
            display: -webkit-box;
            // 多行超出隐藏
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
          }
        }
      }
    }
    .tips {
      margin-bottom: 0;
      text-align: center;
    }
  }
}

ul::-webkit-scrollbar {
    display: none;
}
</style>
