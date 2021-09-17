<template>
  <div class="h-button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'h-button-group',
  components: {}
}
</script>

<style lang="scss" scoped>
.h-button-group {
  display: inline-flex;
  > .h-button {
    border-radius: 0;

    // 解决边框重叠加粗的问题
    margin-left: -1px;

    &:first-child {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    &:last-child {
      border-top-right-radius: var(--border-radius);
      border-bottom-right-radius: var(--border-radius);
    }

    // 优化上面解决边框重叠加粗的问题时产生的 bug，显示所有边框线
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
