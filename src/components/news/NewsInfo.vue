<template>
  <div class="newsinfo">
    <h3>新闻标题</h3>
    <div class="info">
      <span class="time">{{ newsinfo.add_time }}</span>
      <span class="click">点击了:{{ newsinfo.click }}次</span>
    </div>
    <p v-html="newsinfo.content"></p>
  </div>
</template>

<script>
import { getnewsinfo } from '@/axios/api.js'
export default {
  name: 'Newsinfo',
  data () {
    return {
      id: this.$route.params.id,
      newsinfo: []
    }
  },
  created () {
    getnewsinfo({newid: this.id}).then(res => {
      this.newsinfo = res[0]
    })
  }
}
</script>

<style lang="less">
.newsinfo {
  padding: 4px;
  h3 {
    text-align: center;
    color: #26a2ff;
    padding: 10px;
    font-weight: 700;
  }
  .info {
    display: flex;
    justify-content: space-between;
    padding: 0 0 6px;
    border-bottom: 1px solid #eee;
    span {
      font-size: 14px;
      color: #222;
    }
  }
  img {
    width: 100%;
  }
}
</style>
