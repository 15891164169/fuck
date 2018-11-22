<template>
  <div class="newslist">
    <div id="pullrefresh" class="wrap">
      <div class="mui-scroll">
      <!-- <scroller :on-infinite="infinite"  :on-refresh = "refresh" ref="myScroller"> -->
        <ul class="mui-table-view">
          <li v-for="(list, index) in newslists" :key="index" class="mui-table-view-cell mui-media">
            <router-link :to="'/home/newsinfo/'+ list.id" @tap="test()">
              <img class="mui-media-object mui-pull-left" src="@/assets/tupian.png">
              <div class="mui-media-body">
                <p class="text">{{ list.title }}</p>
                <p class="mui-ellipsis">
                  <span>发表时间：{{ list.add_time }}</span>
                  <span>点击：{{ list.click }} 次</span>
                </p>
              </div>
            </router-link>
          </li>
        </ul>
      <!-- </scroller> -->
      </div>
    </div>
  </div>
</template>
<script>
import mui from '@/lib/mui/js/mui.min.js'
import { getnewslists } from '@/axios/api.js'
export default {
  name: 'Newslist',
  data () {
    return {
      newslists: []
    }
  },
  created () {
    this.getnewslists()
  },
  mounted () {
    for (var i = mui.hooks.inits.length - 1, item; i >= 0; i--) {
      item = mui.hooks.inits[i]
      if (item.name === 'pullrefresh') {
        item.repeat = true
      }
    }
    mui.init({
      pullRefresh: {
        container: '#pullrefresh', // 下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
        down: {
          style: 'circle', // 必选，下拉刷新样式，目前支持原生5+ ‘circle’ 样式
          color: 'red', // 可选，默认“#2BD009” 下拉刷新控件颜色

          // height: 50, // 可选,默认50px.下拉刷新控件的高度,
          // range: 100, // 可选 默认100px,控件可下拉拖拽的范围
          // offset: 40, // 可选 默认0px,下拉刷新控件的起始位置

          auto: false, // 可选,默认false.首次加载自动上拉刷新一次

          contentdown: '下拉即可刷新', // 可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
          contentover: '释放立即刷新', // 可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
          contentrefresh: '正在刷新...', // 可选，正在刷新状态时，下拉刷新控件上显示的标题内容
          callback: () => {
            setTimeout(() => {
              console.log(this)
              this.getnewslists()
              mui('#pullrefresh').pullRefresh().endPulldownToRefresh()
              mui('#pullrefresh').pullRefresh().refresh(true)
            }, 2000)
          } // 必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
        },
        up: {
          color: 'red', // 可选，默认“#2BD009” 下拉刷新控件颜色
          height: 100,
          // contentup: '上拉即可刷新', // 可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
          // contentover: '释放立即刷新', // 可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
          contentrefresh: '正在刷新...', // 可选，正在刷新状态时，下拉刷新控件上显示的标题内容
          contentnomore: '没了别拉了',
          callback: () => {
            setTimeout(() => {
              console.log(this)
              this.getnewslists()
              mui('#pullrefresh').pullRefresh().endPullupToRefresh(true)
            }, 2000)
          }
        }
      }
    })
  },
  methods: {
    refresh (done) {
      setTimeout(() => {
        getnewslists().then(res => {
          this.newslists = res
        })
        done()
      }, 2000)
    },
    infinite (done) {
      setTimeout(() => {
        getnewslists().then(res => {
          this.newslists = res
        })
        this.$refs.myScroller.finishInfinite(true)
      }, 2000)
    },
    getnewslists () {
      getnewslists().then(res => {
        this.newslists = res
      })
    }
  }
}
</script>

<style scoped lang="less">
.mui-pull-top-pocket {
  background: #26a2ff !important;
  top: 100px !important;
}
.newslist {
  .wrap {
    height: 100%;
    .mui-pull-top-pocket{
      top: 40px !important;
      .mui-pull-caption {
        color: red !important;
      }
    }
    .mui-table-view {
      .mui-table-view-cell {
        padding-bottom: 30px;
      }
      .text {
        font-size: 14px;
      }
      .mui-ellipsis {
        display: flex;
        justify-content: space-between;
        color: #26a2ff;
        font-size: 12px;
      }
    }
  }
}
</style>
