<template>
  <div class="container">
    <h-input value="AAA" disabled></h-input>
    <h-input value="BBB" readonly></h-input>
    <h-input value="BBB" error="Warning 错误信息" @change="change1"></h-input>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
export default {
  components: {
    'h-input': Input
  },
  methods: {
    change1() {
      console.log('1')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin: 20px 0 20px 0;
}
</style>
