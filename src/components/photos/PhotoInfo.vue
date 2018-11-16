<template>
  <div class="photoinfo">
    <h2>{{ getimageInfo.title }}</h2>
    <div class="time_cick">
      <span class="time">{{ getimageInfo.add_time }}</span>
      <span class="cick">点击：{{ getimageInfo.click }}次</span>
    </div>

    <!-- 图片墙 -->
    <div class="prev-box">
      <vue-preview :slides="imgslides" @close="handleClose" width="100"></vue-preview>
      <!-- <img class="preview-img" v-for="(item, index) in imgslides" :src="item.src" height="100" :key="index"> -->
    </div>

    <p v-html="getimageInfo.content"></p>
  </div>
</template>

<script>
import { getimageInfo, getthumimages } from '@/axios/api.js'
export default {
  name: 'Photoinfo',
  data () {
    return {
      id: this.$route.params.id,
      getimageInfo: {},
      imgslides: [
        // {
        //   src: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg',
        //   msrc: 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg',
        //   alt: 'picture1',
        //   title: 'Image Caption 1',
        //   w: 600,
        //   h: 400
        // }
      ]
    }
  },
  created () {
    getimageInfo({imgid: this.id}).then(res => {
      this.getimageInfo = res[0]
    })
    getthumimages({imgid: this.id}).then(res => {
      let resData = res
      resData.forEach((item, idx) => {
        item.src = 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg'
        item.msrc = 'https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg'
        item.alt = 'Image Caption ' + (idx + 1)
        item.title = 'picture' + (idx + 1)
        item.w = 600
        item.h = 400
      })
      this.imgslides = resData
    })
  },
  methods: {
    // 图片缩略图关闭触发的方法
    handleClose () {
      console.log('close event')
    }
  }
}
</script>

<style lang="less">
.photoinfo {
  padding: 4px;
  box-sizing: border-box;
  h2 {
    margin: 0;
    line-height: 52px;
    text-align: center;
    font-size: 16px;
    font-weight: 700;
    color: #26a2ff;
  }
  .time_cick {
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
    font-size: 12px;
    color: rgb(185, 181, 181);
    display: flex;
    justify-content: space-between;
    .time {}
    .cick {}
  }
  .prev-box {
    .my-gallery {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      figure {
        padding: 10px 10px;
        img {
          width: 150px;
        }
      }
    }
  }
  p {
    color: #000;
    margin: 0;
    line-height: 30px;
  }
}
</style>
