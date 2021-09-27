<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'HMain'
}
</script>

<style lang="scss" scoped>
.main {
  flex: 1;
  flex-basis: auto;
}
</style>
