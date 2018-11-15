<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
    <button @click="dec" class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input ref="ipt" id="test" class="mui-input-numbox" type="number" :value="value" @change="emt()">
    <button @click="add" class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
// import mui from '@/lib/mui/js/mui.min.js'
export default {
  props: ['maxNum'],
  data () {
    return {
      value: 1
    }
  },
  mounted () {
    // mui('.mui-numbox').numbox()
  },
  methods: {
    add () {
      if (this.value >= this.maxNum) {
        console.log(this.value)
        console.log(this.maxNum)
        this.value = this.maxNum
        this.$emit('accountNum', this.value)
      } else {
        this.value++
        this.$emit('accountNum', this.value)
      }
      // alert(1)
    },
    dec () {
      // console.log(this.maxNum)
      if (this.value <= 1) {
        this.$emit('accountNum', this.value)
        return
      }
      this.value--
      this.$emit('accountNum', this.value)
    },
    emt () {
      this.$emit('accountNum', parseInt(this.$refs.ipt.value))
    }
  }
}
</script>
