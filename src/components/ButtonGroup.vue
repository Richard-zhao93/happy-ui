<template>
  <div class="h-button-group">
    <h-button icon="left">上一页</h-button>
    <h-button icon="right" iconPosition="right">下一页</h-button>
    <slot></slot>
  </div>
</template>

<script>
import Button from './Button.vue'
export default {
  name: 'h-button-group',
  components: {
    'h-button': Button
  }
}
</script>

<style lang="scss" scoped>
.h-button-group {
  > .h-button {
    // border-radius: 0;

    &:not(:first-child) {
    }
  }
}
</style>
