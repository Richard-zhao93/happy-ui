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
  </div>
</template>

<script>
import CascaderItem from './CascaderItem'

export default {
  name: 'HCascader',
  components: {
    'h-cascader-item': CascaderItem
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
