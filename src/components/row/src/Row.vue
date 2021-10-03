<template>
  <div class="row" :style="rowStyle" :class="rowClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HRow',
  props: {
    gutter: {
      type: [Number, String]
    },
    // 控制项目内元素摆放方式 左对齐、右对齐、居中对齐
    align: {
      type: String,
      validator(value) {
        return ['left', 'right', 'cetner'].includes(value)
      }
    }
  },
  computed: {
    rowStyle() {
      let { gutter } = this
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      }
    },
    rowClass() {
      let { align } = this
      return [algin && `align-${align}`]
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;

  &.align-left {
    justify-content: flex-start;
  }
  &.align-right {
    justify-self: flex-end;
  }
  &.align-center {
    justify-content: center;
  }
}
</style>
