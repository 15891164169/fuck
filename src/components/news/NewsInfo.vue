<template>
  <div class="newsinfo">
    <h3>新闻标题</h3>
    <span>大撒三大打算打算阿萨德爱的阿萨德</span>
    <p v-html="newsinfo"></p>
  </div>
</template>

<script>
import { getnewsinfo } from '@/axios/api.js'
export default {
  name: 'Newsinfo',
  data () {
    return {
      id: this.$route.params.id,
      newsinfo: ''
    }
  },
  created () {
    getnewsinfo({newid: this.id}).then(res => {
      this.newsinfo = res[0].content
    })
  }
}
</script>

<style scoped>

</style>
