<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HRow',
  props: {
    gutter: {
      type: [Number, String]
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  margin: 0 -10px;
}
</style>
