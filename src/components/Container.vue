<template>
  <div class="container" :class="isVertical ? 'is-vertical' : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HContainer',
  data() {
    return {
      isVertical: false
    }
  },
  mounted() {
    // 判断当前组件下是否存在 Aside 子组件，
    // 通过 isVertical 变量控制
    // 存在则将 flex-direction 属性值设置为 row；
    // 反之，则设置为 column
    this.$nextTick(() => {
      this.$children.forEach(child => {
        child.$options.name === 'HAside' ? (this.isVertical = true) : ''
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-basis: auto;
  flex-wrap: nowrap;
  box-sizing: border-box;
  min-width: 0;

  &.is-vertical {
    flex-direction: row;
  }
}
</style>
