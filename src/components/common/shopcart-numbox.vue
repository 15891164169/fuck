<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="addtoshopcart(cal)">-</button>
    <input id="test" class="mui-input-numbox" readonly type="number" v-model="value" ref="actnum">
    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="addtoshopcart(cal)">+</button>
  </div>
</template>

<script>
import mui from '@/lib/mui/js/mui.min.js'
import { mapActions } from 'vuex'

export default {
  props: ['count', 'item'],
  data () {
    return {
      value: this.count
    }
  },
  mounted () {
    mui('.mui-numbox').numbox()
    this.cal
  },
  computed: {
    cal () {
      let obj = {}
      this.item.forEach((item, k, v) => {
        // obj[k] = item[k]
        console.log(item)
        console.log(k)
        console.log(v)
      })
      return obj
    }
  },
  methods: {
    ...mapActions(['addtoshopcart'])
  }
}
</script>
