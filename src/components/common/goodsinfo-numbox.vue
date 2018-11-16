<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="accountNum">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" ref="actnum" @change="changeVal">
    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="accountNum">+</button>
  </div>
</template>

<script>
import mui from '@/lib/mui/js/mui.min.js'

export default {
  props: ['maxNum'],
  data () {
    return {
      // value: 3
    }
  },
  mounted () {
    // mui('.mui-numbox').numbox()
  },
  watch: {
    'maxNum' (newVal, oldVal) {
      mui('.mui-numbox').numbox().setOption('max', newVal)
      this.val = newVal
    }
  },
  methods: {
    accountNum () {
      this.$emit('sendNum', parseInt(this.$refs.actnum.value))
    },
    changeVal () {
      parseInt(this.$refs.actnum.value) >= this.cal ? this.$emit('sendNum', this.val) : this.$emit('sendNum', parseInt(this.$refs.actnum.value))
    }
  }
}
</script>
