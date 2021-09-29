<template>
  <div class="cascader">
    <div class="trigger">
      <slot></slot>
    </div>

    <div class="popover">
      <div v-for="item in options" :key="item.name">
        <h-cascader-item :option="item"></h-cascader-item>
      </div>
    </div>

    <!-- 输入框部分 -->
    <div>
      <h-input></h-input>
    </div>
  </div>
</template>

<script>
import CascaderItem from './CascaderItem'
import Input from './Input.vue'

export default {
  name: 'HCascader',
  components: {
    'h-cascader-item': CascaderItem,
    'h-input': Input
  },
  props: {
    options: {
      type: Array
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../../assests/_variable');

.cascader {
}
</style>
