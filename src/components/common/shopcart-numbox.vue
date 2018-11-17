<template>
  <div class="mui-numbox" data-numbox-min="1" data-numbox-max="100">
    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="decreaseshopcart([item, 1])">-</button>
    <input id="test" class="mui-input-numbox" readonly type="number" v-model="value" ref="actnum">
    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="increaseshopcart([item, 1])">+</button>
    <!-- <button class="mui-btn mui-btn-numbox-plus" type="button" @click="test()">+</button> -->
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
  },
  methods: {
    test () {},
    ...mapActions(['increaseshopcart']),
    ...mapActions(['decreaseshopcart'])
  }
}
</script>
